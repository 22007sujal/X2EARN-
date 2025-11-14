import jwt from "jsonwebtoken";

export function createJWT(userId: string) {
  return jwt.sign(
    { sub: userId },
    process.env.JWT_SECRET!,
    { expiresIn: "7d" }
  );
}

export function verifyJWT(token: string) {
  return jwt.verify(token, process.env.JWT_SECRET!) as { sub: string };
}
