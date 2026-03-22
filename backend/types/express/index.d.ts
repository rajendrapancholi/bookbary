import "express";
import { Request } from "express";
import { User } from "../../models/User";
import { DefaultSession } from "@auth/core/types";

// AuthUser type
export interface AuthUser {
  id: number;
  name: string;
  email: string;
  role: string
}
// Extend Express Request
export interface AuthRequest extends Request {
  user?: AuthUser;
}

declare module "@auth/core/types" {
  interface Session {
    user: {
      id?: string;
      role?: string
      name?: string | null;
      email?: string | null;
      image?: string | null;
    };
  }
}

declare global {
  namespace Express {
    interface Request {
      user?: {
        id: number;
        name: string;
        role: string
        email: string;
      };
    }
  }
}

declare global {
  namespace Express {
    interface User extends AuthUser {} // Merge globally
  }

  interface Request {
    user?: Express.User; // optional, type-safe
  }
}

declare module "express-serve-static-core" {
  interface Request {
    authTokens?: {
      token: string;
      csrfToken: string;
    };
  }
}
