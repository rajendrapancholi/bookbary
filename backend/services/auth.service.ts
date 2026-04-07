import { ResultSetHeader, RowDataPacket } from "mysql2/promise";
import bcrypt from "bcryptjs";
import db from "../config/db";
import { NewUser, User } from "../models/User";

// Get a user by email
export const fetchUserByEmail = async (email: string): Promise<User | null> => {
  const [rows] = await db.execute<RowDataPacket[]>(
    "SELECT * FROM USERS WHERE email = ?",
    [email],
  );
  const user = (rows as User[])[0];
  return user || null;
};

// Get a user by id
export const fetchUserById = async (uid: string): Promise<User | null> => {
  const [rows] = await db.execute<RowDataPacket[]>(
    "SELECT * FROM USERS WHERE uid = ?",
    [uid],
  );
  const user = (rows as User[])[0];
  return user || null;
};

// Create user
export const createUser = async (newUser: NewUser): Promise<User | null> => {
  const {
    fname,
    lname,
    email,
    password,
    role = "viewer",
    provider = "credentials",
  } = newUser;

  // Hash the password
  const hashedPassword = await bcrypt.hash(password, 10); // 10 is the salt value

  try {
    // Insert the user
    const sql = `INSERT INTO USERS (fname, lname, email, password, role, provider) VALUES (?, ?, ?, ?, ?, ?)`;
    const [result]: any = await db.execute<ResultSetHeader>(sql, [
      fname,
      lname,
      email,
      hashedPassword,
      role,
      provider,
    ]);

    // result.insertId contains the new user ID
    const uid = result.insertId;
    if (!uid) return null;

    // Return the created user object
    return {
      uid,
      fname,
      lname,
      email,
      role,
      provider,
    } as User;
  } catch (err: any) {
    if (err.code === "ER_DUP_ENTRY") {
      throw new Error("Email already exists");
    }
    throw err;
  }
};
