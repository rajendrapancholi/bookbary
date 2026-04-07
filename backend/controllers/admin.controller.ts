import { Request, Response } from "express";
import { revokeAllUserSessions } from "../utils/generateToken";
import db from "../config/db";

export const banUser = async (req: Request, res: Response) => {
  const { userIdToBan } = req.params;

  await db.execute("UPDATE USERS SET is_active = 0 WHERE id = ?", [userIdToBan]);

  await revokeAllUserSessions(Number(userIdToBan));

  res.json({ message: "User banned and sessions revoked." });
};
