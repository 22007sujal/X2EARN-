import { NextRequest, NextResponse } from "next/server";

const userNonces = new Map<string, string>();

export async function POST(request: NextRequest): Promise<NextResponse> {
  try {
    const { wallet_address } = await request.json();

    if (!wallet_address) {
      return NextResponse.json(
        { error: "Missing wallet_address" },
        { status: 400 }
      );
    }

    // Validate wallet prefix
    if (!wallet_address.startsWith("0x")) {
      return NextResponse.json(
        { error: "Invalid wallet address — must start with 0x" },
        { status: 400 }
      );
    }

    // Generate random 8-character nonce
    const nonce = Math.random().toString(16).substring(2, 10);

    // Store it temporarily (in-memory)
    userNonces.set(wallet_address.toLowerCase(), nonce);

    return NextResponse.json({
      wallet_address,
      nonce,
      message: "Nonce generated successfully",
    });
  } catch (error) {
    console.error("Error generating nonce:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

// ✅ Export the same map for reuse by the verify route
export { userNonces };
