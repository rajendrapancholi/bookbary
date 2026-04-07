import jwt from "jsonwebtoken";
import { redis } from "../config/redis";

const JWT_SECRET = process.env.JWT_SECRET as string;

export const generateToken = (
  uid: number,
  isAdmin: boolean,
  role: string,
): string => {
  return jwt.sign({ uid, isAdmin, role }, process.env.JWT_SECRET as string, {
    expiresIn: "7d",
  });
};

export const blacklistToken = async (token: string) => {
  try {
    const decoded = jwt.decode(token) as any;
    if (decoded && decoded.uid && decoded.exp) {
      const ttl = decoded.exp - Math.floor(Date.now() / 1000);
      if (ttl > 0) {
        // Key format: blacklist:userId:tokenString
        await redis.set(`blacklist:${decoded.uid}:${token}`, "true", "EX", ttl);
      }
    }
  } catch (err) {
    console.error("Token blacklisting failed:", err);
  }
};

export const isTokenBlacklisted = async (token: string): Promise<boolean> => {
  // We search for keys ending in this specific token
  const keys = await redis.keys(`blacklist:*:${token}`);
  return keys.length > 0;
};

/**
 * NEW: Revoke all active sessions for a specific user ID
 */
export const revokeAllUserSessions = async (userId: string) => {
  const keys = await redis.keys(`blacklist:${userId}:*`);
  if (keys.length > 0) {
    await redis.del(...keys);
  }
};

export const verifyToken = (token: string) => {
  return jwt.verify(token, JWT_SECRET);
};

/* 
{
  id: 3,
  isAdmin: true,
  role: 'admin',
  iat: 1744147806,
  exp: 1746739806
}
<HEADER>.<PAYLOAD>.<SIGNATURE>
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9. 
eyJpZCI6MywiaXNBZG1pbiI6dHJ1ZSwicm9sZSI6ImFkbWluIiwiaWF0IjoxNzQ0MTQ3ODA2LCJleHAiOjE3NDY3Mzk4MDZ9. 
bmORm2aXUImAVr9dphOAF6OK6hcBWuDpG6FAwN8DGgc
*/
// echo '<PAYLOAD>' | base64 -d
