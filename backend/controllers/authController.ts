import bcrypt from "bcryptjs";
import { NextFunction, Request, Response } from "express";
import passport from "passport";
import asyncHandler from "../middlewares/asyncHandler";
import { OAuthUser, User, createUser, getUserByEmail } from "../models/User";
import { generateToken } from "../utils/generateToken";
import { ENV } from "../config/env";
import jwt from "jsonwebtoken";
import { fetchUserById } from "../services/auth.service";
import { AuthUser } from "../types/express";
// Register user
export const registerUser = asyncHandler(
  async (req: Request, res: Response) => {
    const { fname, lname, email, password } = req.body;
    console.log("Request body:", req.body); // Log to check incoming request

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

export const me = asyncHandler(async (req: Request, res: Response) => {
  let token: string | undefined;
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      token = req.headers.authorization.split(" ")[1];
      if (!token) return res.status(401).json({ message: "Not authenticated" });

      const decoded = jwt.verify(token, process.env.JWT_SECRET as string) as AuthUser;

      const user = await fetchUserById(decoded.id);
      
      if (!user) return res.status(401).json({ message: "Not authenticated" });
      res.json({
        user: {
          id: user.id,
          email: user.email,
          name: `${user.fname} ${user.lname}`,
          role: user.role,
        },
      });
    } catch (err) {
      res.status(403).json({ message: "Forbidden" });
    }
  } else {
    res.status(401).json({ message: "Not authorized, no token" });
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
  console.log("User is", user);
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
  if (!user)
    return res.redirect(`${ENV.CLIENT_ORIGIN}/signin?error=oauth_failed`);

  const token = generateToken(
    Number(user.id),
    user.role === "admin",
    user.role,
  );

  res.cookie("token", token, {
    httpOnly: true,
    secure: ENV.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
  });

  // res.cookie("csrf-protection-token-readable", csrfToken, {
  //   httpOnly: false,
  //   secure: ENV.NODE_ENV === "production",
  //   sameSite: "lax",
  //   path: "/",
  // });

  res.redirect(`${ENV.CLIENT_ORIGIN}/oauth-callback?login=success`);
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
      // await RedisManager.addToBlacklist(decoded.jti, expSeconds);
    } catch {}
  }
  res.clearCookie("token", { path: "/" });
  res.clearCookie("csrf-protection-token-readable", { path: "/" });
  // res.redirect(`${ENV.CLIENT_ORIGIN}/`);
};
