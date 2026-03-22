import bcrypt from 'bcryptjs';
import crypto from 'crypto'
/**
 * Generate a secure random password and hash it
 */
export async function generateRandomPassword(length = 16): Promise<string> {
  const randomString = crypto.randomBytes(length).toString("hex"); // 32 chars
  const hashed = await bcrypt.hash(randomString, 10); // hash for DB storage
  return hashed;
}
