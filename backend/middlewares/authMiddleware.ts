import { Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import { AuthRequest, AuthUser } from "../types/express";
import { isTokenBlacklisted, verifyToken } from "../utils/generateToken";

// Protect middleware for authentication
export const protect = async (
  req: AuthRequest,
  res: Response,
  next: NextFunction,
) => {
  let token: string | undefined;

  // Check if token is in the header
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      token = req.headers.authorization.split(" ")[1];
      if (await isTokenBlacklisted(token)) {
        return res
          .status(401)
          .json({ message: "Token has been revoked. Please log in again." });
      }
      const decoded = verifyToken(token);

      // Attach user to the request object
      req.user = decoded as AuthUser;
      // Call next if authenticated
      next();
    } catch (error) {
      res.status(401).json({ message: "Not authorized, token failed" });
    }
  } else {
    res.status(401).json({ message: "Not authorized, no token" });
  }
};

export const verify = async (
  req: AuthRequest,
  res: Response,
  next: NextFunction,
) => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res.status(401).json({ message: "Not authorized, no token" });
  }

  const token = authHeader.split(" ")[1];

  if (await isTokenBlacklisted(token)) {
    return res
      .status(401)
      .json({ message: "Token has been revoked. Please log in again." });
  }
  try {
    const decoded = verifyToken(token) as AuthUser;

    req.user = decoded;
    return next();
  } catch (error) {
    console.error("JWT verification failed:", error);
    return res.status(401).json({ message: "Not authorized, token failed" });
  }
};

export const authorize = (roles: AuthUser["role"][]) => {
  return (req: AuthRequest, res: Response, next: NextFunction) => {
    if (!req.user)
      return res.status(401).json({ message: "Unauthorized: No user context" });

    const userRole = req.user.role.toLowerCase();
    const allowedRoles = roles.map((r) => r.toLowerCase());
    if (!allowedRoles.includes(userRole))
      return res.status(403).json({ message: "Forbidden: Insufficient role" });

    next();
  };
};

export const adminOnly = async (
  req: AuthRequest,
  res: Response,
  next: NextFunction,
) => {
  let token: string | undefined;

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      token = req.headers.authorization.split(" ")[1];
      const decoded = jwt.verify(token, process.env.JWT_SECRET as string);

      req.user = decoded as AuthUser;
      if (req.user.role === "admin") {
        next();
      } else {
        res.status(403).json({ message: "Access denied. Admins only." });
      }
    } catch (error) {
      res.status(401).json({ message: "Not authorized, token failed" });
    }
  } else {
    res.status(401).json({ message: "Not authorized, no token" });
  }
};
