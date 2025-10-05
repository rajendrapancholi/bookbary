import bcrypt from "bcryptjs";
import { Request, Response } from "express";
import asyncHandler from "../middlewares/asyncHandler";
import { User, createUser, getUserByEmail } from "../models/User";
import { generateToken } from "../utils/generateToken";

// Register user
export const registerUser = asyncHandler(
  async (req: Request, res: Response) => {
    const { fName, lName, email, password, role } = req.body;
    console.log("Request body:", req.body); // Log to check incoming request

    // Ensure all required fields are present
    if (!fName || !lName || !email || !password || !role) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const userExists = await getUserByEmail(email);
    if (userExists) {
      return res.status(400).json({ message: "User already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    // Create new user object
    const newUser: User = {
      fName,
      lName,
      email,
      password: hashedPassword,
      role,
    };
    console.log("New User object:", newUser);

    const result = await createUser(newUser);

    if (result) {
      res.status(201).json({ message: "User registered successfully!" });
    } else {
      res.status(400).json({ message: "Failed to register user" });
    }
  }
);

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
// {
//   "token": "your.jwt.token",
//   "user": {
//     "id": 1,
//     "email": "admin@example.com",
//     "isAdmin": true
//   }
// }
