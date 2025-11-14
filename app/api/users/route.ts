import { NextRequest, NextResponse } from "next/server";
import getTweet from "@/app/services/get_tweettext";
import { userNonces } from "../nonce/route";
import { db } from "@/app/db";
import jwt from "jsonwebtoken";




const JWT_SECRET = process.env.JWT_SECRET || "supersecretkey";
const COOKIE_NAME = "user";




export async function POST(request: NextRequest): Promise<NextResponse> {
  try {
    const { wallet, tweetUrl } = await request.json();

    if (!wallet || !tweetUrl) {
      return NextResponse.json(
        { error: "Missing wallet or tweetUrl" },
        { status: 400 }
      );
    }

    // Fetch tweet + username
    const { tweet, username } = await getTweet(tweetUrl);

    if (!tweet) {
      return NextResponse.json({ error: "Unable to read tweet" }, { status: 400 });
    }

    if (!username) {
      return NextResponse.json({ error: "Unable to read tweet username" }, { status: 400 });
    }

    const storedNonce = userNonces.get(wallet.toLowerCase());
    if (!storedNonce) {
      return NextResponse.json({ error: "Nonce not found. Generate again." }, { status: 400 });
    }

    // Validate wallet & nonce inside tweet text
    const hasWallet = tweet.includes(wallet);
    const hasNonce = tweet.includes(storedNonce);

    if (!hasWallet || !hasNonce) {
      return NextResponse.json({
        verified: false,
        error: "Tweet missing wallet or nonce",
        tweet,
      });
    }

    // Remove nonce
    userNonces.delete(wallet.toLowerCase());

    // Save user to DB
    const [result] = await db.execute(
      `INSERT INTO users (username, wallet_address, jobs_done, lifetime_earning, current_balance, tsc_token_balance, joined_at, last_active)
       VALUES (?, ?, 0, 0, 0, 0, NOW(), NOW())`,
      [username, wallet]
    );

    // ✅ Create JWT token
    const token = jwt.sign({ username, wallet }, JWT_SECRET, { expiresIn: "7d" });

    // ✅ Create response and set cookie
    const response = NextResponse.json({
      verified: true,
      tweet,
      username,
      message: "Tweet verified & user saved",
    });

    response.cookies.set(COOKIE_NAME, token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      path: "/",
      maxAge: 60 * 60 * 24 * 7, // 7 days
    });

    return response;
  } catch (error) {
    console.error("Verification error:", error);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}




const SECRET = process.env.JWT_SECRET || "supersecretkey";

export async function GET(req: NextRequest) {
  // Get cookie named 'user'
  const cookie = req.cookies.get("user");
  if (!cookie) {
    return NextResponse.json({ error: "No cookie found" }, { status: 401 });
  }

  try {
    // Verify JWT and extract payload
    const payload = jwt.verify(cookie.value, SECRET) as { username: string };

    if (!payload.username) {
      return NextResponse.json({ error: "Invalid token" }, { status: 401 });
    }

    // Fetch user data from DB
    const [rows]:any = await db.execute(
      "SELECT * FROM users WHERE username = ?",
      [payload.username]
    );

    const user = rows[0] ?? null;

    return NextResponse.json({ user });
  } catch (err) {
    return NextResponse.json({ error: "Invalid or expired token" }, { status: 401 });
  }
}