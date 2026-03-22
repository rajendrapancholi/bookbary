import db from "../config/db";
import bcrypt from "bcryptjs";

// Base user from database
export interface User {
  id?: number;
  fname: string;
  lname: string;
  email: string;
  password: string;
  isAdmin?: number;
  role?: string;
  provider?: "credentials" | "google" | "github" | "linkedin";
  created_at?: Date;
  updated_at?: Date;
  comparePassword?: (candidatePassword: string) => Promise<boolean>;
}

export const createUser = async (user: User) => {
  const { fname, lname, email, password, role = "user" } = user;

  // Ensure that we are passing all the required values
  const sql = `INSERT INTO USERS (Fname, Lname, email, password, role) VALUES (?, ?, ?, ?, ?)`;

  const parameters = [fname, lname, email, password, role];

  // Debugging: log the query and parameters
  // console.log("SQL Query:", sql);
  // console.log("Parameters:", parameters);

  try {
    // Execute query with parameters
    const [result] = await db.execute(sql, parameters);
    return result;
  } catch (error) {
    // Log and rethrow any error
    console.error("Error executing SQL:", error);
    throw error;
  }
};

export const getUserByEmail = async (email: string) => {
  const sql = `SELECT * FROM USERS WHERE email = ?`;
  const [rows] = await db.execute(sql, [email]);
  return (rows as any)[0];
};

/* 
{
  "email": "raje@mail.com",
  "password": "raje"
}
{
  "email": "simran@mail.com",
  "password": "sim"
} */

// models/User.ts
export interface OAuthUser {
  id: string;
  fname: string;
  lname: string;
  email: string;
  password: string;
  role: string;
  provider?: string;
  token: string;
}

// When creating a new user (no id yet)
export type NewUser = Omit<
  User,
  "id" | "comparePassword" | "created_at" | "updated_at"
>;

// Options for fetching lists of users
export interface FetchUsersOptions {
  page?: number;
  limit?: number;
  search?: string;
  role?: string;
}

// A simplified user representation for list views
export interface FetchUsers {
  uid: string;
  name: string;
  email: string;
  role: string;
  created_at: Date;
  updated_at: Date;
}

// Utility: attach a password comparison method to a user
export const attachComparePassword = (user: User): User => {
  return {
    ...user,
    comparePassword: async function (candidatePassword: string) {
      return await bcrypt.compare(candidatePassword, this.password);
    },
  };
};
