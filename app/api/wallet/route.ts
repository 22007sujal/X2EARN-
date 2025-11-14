import { db } from "@/app/db";
import { RowDataPacket } from "mysql2";
import { NextRequest, NextResponse } from "next/server";
import { recoverMessageAddress } from "viem";
import jwt from "jsonwebtoken";

interface VerifyRequestBody {
  message: string;
  signature: string;
  address: string;
}

const JWT_SECRET = process.env.JWT_SECRET || "supersecretkey";
const COOKIE_NAME = "user";

export async function POST(request: NextRequest): Promise<NextResponse> {
  console.log("🟦 [Wallet Verify API] Request received");

  try {
    const body: VerifyRequestBody = await request.json();
    const { message, signature, address } = body;

    console.log("🔹 Parsed request body:", {
      message,
      signature: signature?.slice(0, 20) + "...",
      address,
    });

    // Normalize signature
    let sig: `0x${string}` = signature.startsWith("0x")
      ? (signature as `0x${string}`)
      : (`0x${signature}` as `0x${string}`);

    console.log("🧩 Normalized signature:", sig.slice(0, 20) + "...");

    // Recover signer address
    const recoveredAddress = await recoverMessageAddress({
      message,
      signature: sig,
    });

    console.log("🟢 Recovered address:", recoveredAddress);

    const isValid = recoveredAddress.toLowerCase() === address.toLowerCase();
    console.log("✅ Address match result:", isValid);

    // Check if user exists
    const [rows] = await db.execute<RowDataPacket[]>(
      "SELECT * FROM users WHERE wallet_address = ?",
      [address]
    );

    const alreadyUser = rows.length > 0;

    const response = NextResponse.json({
      success: true,
      verified: isValid,
      recoveredAddress,
      alreadyUser,
    });

    // ✅ Set cookie if user exists
    if (alreadyUser && isValid) {
      const userPayload = { username: rows[0].username }; // or address if you prefer
      const token = jwt.sign(userPayload, JWT_SECRET, { expiresIn: "7d" });

      // Set cookie
      response.cookies.set(COOKIE_NAME, token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "strict",
        path: "/",
        maxAge: 60 * 60 * 24 * 7, // 7 days
      });
    }

    return response;
  } catch (err: any) {
    console.error("❌ [Wallet Verify API] Error:", err);
    return NextResponse.json(
      { success: false, error: err.message || "Unexpected error" },
      { status: 400 }
    );
  }
}
