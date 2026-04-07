import { Response } from "express";
import { AuthRequest } from "../types/express";
import { revokeAllUserSessions } from "../utils/generateToken";

export const logoutAllDevices = async (req: AuthRequest, res: Response) => {
  const userId = req.user?.uid;

  if(!userId) return res.status(401).json({ message: "Invalid credentials" });
  
  await revokeAllUserSessions(userId);

  res.json({ message: "You have been logged out of all devices." });
};
