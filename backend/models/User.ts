import db from "../config/db.ts";

export interface User {
  id?: number;
  fName: string;
  lName: string;
  email: string;
  password: string;
  isAdmin?: number;
  role?: string;
}

export const createUser = async (user: User) => {
  const { fName, lName, email, password, role = "worker" } = user;

  // Ensure that we are passing all the required values
  const sql = `INSERT INTO USERS (Fname, Lname, email, password, role) VALUES (?, ?, ?, ?, ?)`;

  const parameters = [fName, lName, email, password, role];

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
