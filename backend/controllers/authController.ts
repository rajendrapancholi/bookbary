import bcrypt from "bcryptjs";
import type { NextFunction, Request, Response } from "express";
import passport from "passport";
import asyncHandler from "../middlewares/asyncHandler";
import { createUser, getUserByEmail, type OAuthUser, type User } from "../models/User";
import { generateToken } from "../utils/generateToken";
import { ENV } from "../config/env";
import { fetchUserById } from "../services/auth.service";
import type { AuthRequest } from "../types/express";
// Register user
export const registerUser = asyncHandler(
  async (req: Request, res: Response) => {
    const { fname, lname, email, password } = req.body;

    // Ensure all required fields are present
    if (!fname || !lname || !email || !password) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const userExists = await getUserByEmail(email);
    if (userExists) {
      return res.status(400).json({ message: "User already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    // Create new user object
    const newUser: User = {
      fname,
      lname,
      email,
      password: hashedPassword,
      provider: "credentials",
    };
    console.log("New User object:", newUser);

    const result = await createUser(newUser);

    if (result) {
      res.status(201).json({ message: "User registered successfully!" });
    } else {
      res.status(400).json({ message: "Failed to register user" });
    }
  },
);

export const me = asyncHandler(async (req: AuthRequest, res: Response) => {
  if (!req.user) {
    return res.status(401).json({ message: "Not authenticated" });
  }

  try {
    const userId = req.user.uid;
    const user = await fetchUserById(userId.toString());

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    return res.json({
      user: {
        id: user.uid,
        email: user.email,
        name: `${user.fname} ${user.lname}`,
        role: user.role,
        isAdmin: user.isAdmin === 1,
      },
    });
  } catch (err) {
    console.error("Error in /me:", err);
    return res.status(500).json({ message: "Internal Server Error" });
  }
});

// Login user
export const loginUser = asyncHandler(async (req: Request, res: Response) => {
  const { email, password } = req.body;

  // Check if email and password are provided
  if (!email || !password) {
    return res.status(400).json({ message: "Email and password are required" });
  }

  const user = await getUserByEmail(email);

  if (user && (await bcrypt.compare(password, user.password))) {
    const token = generateToken(user.uid, user.isAdmin === 1, user.role);

    res.json({
      token,
      user: {
        id: user.uid,
        name: user.Fname + " " + user.Lname,
        email: user.email,
        isAdmin: user.isAdmin === 1,
        role: user.role,
      },
    });
  } else {
    res.status(401).json({ message: "Invalid email or password" });
  }
});

export const resetPassword = async (req: Request, res: Response) => {
  const { userId, newPassword } = req.body;

  // await updatePasswordInDb(userId, newPassword);

  // await revokeAllUserSessions(userId);

  res.json({
    message: "Password updated. All other sessions have been logged out.",
  });
};

// ---------------- OAuth Controller ----------------
export const googleAuth = (req: Request, res: Response, next: NextFunction) => {
  passport.authenticate("google", { scope: ["profile", "email"] })(
    req,
    res,
    next,
  );
};

export const githubAuth = (req: Request, res: Response, next: NextFunction) => {
  return passport.authenticate("github", { scope: ["user:email"] })(
    req,
    res,
    next,
  );
};

export const linkedinAuth = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  passport.authenticate("linkedin")(req, res, next);
};

export const oauthCallback = async (
  req: Request,
  res: Response,
): Promise<void> => {
  const user = req.user as OAuthUser | undefined;
  console.log("useris : ", user);
  if (!user)
    return res.redirect(`${ENV.CLIENT_ORIGIN}/signin?error=oauth_failed`);

  const token = generateToken(
    Number(user.uid),
    user.role === "admin",
    user.role,
  );
  console.log("toekn: ", token);
  const redirectUrl = `${ENV.CLIENT_ORIGIN}/oauth-callback?login=success&token=${token}`;
  res.redirect(redirectUrl);
};

// ---------------- LOGOUT ----------------
export const logout = async (req: Request, res: Response) => {
  const token = req.cookies?.token;
  if (token) {
    try {
      const decoded: any = "hellow";
      const expSeconds = Math.max(
        0,
        Math.floor((decoded.exp * 1000 - Date.now()) / 1000),
      );
    } catch {}
  }
  res.clearCookie("token", { path: "/" });
  res.clearCookie("csrf-protection-token-readable", { path: "/" });
  // res.redirect(`${ENV.CLIENT_ORIGIN}/`);
};
/*

export const logout = async (req: Request, res: Response) => {
  const authHeader = req.headers.authorization;
  const token = authHeader?.split(' ')[1];

  if (token) {
    try {
      const decoded: any = jwt.decode(token);
      if (decoded && decoded.exp) {
        const currentTime = Math.floor(Date.now() / 1000);
        const ttl = decoded.exp - currentTime;

        if (ttl > 0) {
          await redis.set(`blacklist:${token}`, 'true', 'EX', ttl);
        }
      }
    } catch (err) {
      console.error("Blacklisting failed:", err);
    }
  }

  res.clearCookie("token");
  res.status(200).json({ message: "Logged out and token revoked" });
};
*/
