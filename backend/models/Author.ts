import db from "../config/db";
import { ResultSetHeader, RowDataPacket } from "mysql2";

export interface CreateAuthorType {
  Fname: string;
  Lname: string;
  email: string;
  category: string;
  address: string;
}

export interface AuthorType {
  authId: number;
  auth_name: string;
  email: string;
  category: string;
  address: string;
}

// Get all books
export const getAllAuthors = async (): Promise<AuthorType[]> => {
  const [rows] = await db.execute<RowDataPacket[]>(
    `SELECT authId, CONCAT(Fname, " ", Lname) as auth_name, email, category, address FROM AUTHORS ORDER BY authId`
  );
  return rows as AuthorType[];
};

// Get a book by ID
export const getAuthorById = async (id: number): Promise<AuthorType | null> => {
  const [rows] = await db.execute<RowDataPacket[]>(
    `SELECT authId, CONCAT(Fname, " ", Lname) as auth_name, email, category, address FROM AUTHORS WHERE authId = ?`,
    [id]
  );
  const author = (rows as AuthorType[])[0];
  return author || null;
};

export const createAuthor = async (
  author: CreateAuthorType
): Promise<ResultSetHeader> => {
  const { Fname, Lname, email, category, address } = author;
  const sql = `INSERT INTO AUTHORS (Fname, Lname, email, category, address) VALUES (?, ?, ?, ?, ?)`;
  const [result] = await db.execute<ResultSetHeader>(sql, [
    Fname,
    Lname,
    email,
    category,
    address,
  ]);
  return result;
};
