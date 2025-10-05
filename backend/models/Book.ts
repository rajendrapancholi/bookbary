import db from "../config/db";
import { ResultSetHeader, RowDataPacket } from "mysql2";

// Define TypeScript interface for Book
export interface Book {
  bookId?: number;
  title: string;
  price: number;
  quantity: number;
  cat_id: number;
  edition: string;
  auth_id: number;
}

export interface ReturnBookType {
  readId: number;
  title: string;
  price: number;
  issue_date: string;
  due_date: string;
  return_date: string;
  isReturn: number;
}

// Get all books
export const getAllBooks = async (): Promise<Book[]> => {
  const [rows] = await db.execute<RowDataPacket[]>(
    "SELECT bookId, title, price, quantity, category_name , edition, auth_id from BOOKS JOIN BOOK_CATEGORY ON BOOKS.cat_id=BOOK_CATEGORY.cat_id ORDER BY bookId"
  );
  // const [rows] = await db.execute<RowDataPacket[]>("SELECT * FROM BOOKS");
  // SELECT bookId, title, price, category_name , edition, auth_id from BOOKS JOIN BOOK_CATEGORY ON BOOKS.cat_id=BOOK_CATEGORY.cat_id
  return rows as Book[];
};

// Get all books
export const getAllBks = async (): Promise<Book[]> => {
  const [rows] = await db.execute<RowDataPacket[]>("SELECT * FROM BOOKS");
  // const [rows] = await db.execute<RowDataPacket[]>('SHOW DATABASES');
  return rows as Book[];
};

// Get a book by ID
export const getBookById = async (id: number): Promise<Book | null> => {
  const [rows] = await db.execute<RowDataPacket[]>(
    "SELECT * FROM BOOKS WHERE bookId = ?",
    [id]
  );
  const book = (rows as Book[])[0];
  return book || null;
};

// Create a new book (Fix here)
export const createBook = async (book: Book): Promise<ResultSetHeader> => {
  const { title, price, quantity, cat_id, edition, auth_id } = book;
  const sql = `INSERT INTO BOOKS (title, price, quantity, cat_id, edition, auth_id) VALUES (?, ?, ?, ?, ?, ?)`;
  const [result] = await db.execute<ResultSetHeader>(sql, [
    title,
    price,
    quantity,
    cat_id,
    edition,
    auth_id,
  ]);
  return result;
};

// Update a book by ID
export const updateBook = async (id: number, book: Book): Promise<any> => {
  const { title, price, quantity, cat_id, edition, auth_id } = book;
  const sql = `UPDATE BOOKS SET title = ?, price = ?, quantity = ?, cat_id = ?, edition = ?, auth_id = ?  WHERE bookId = ?`;
  const [result] = await db.execute(sql, [
    title,
    price,
    quantity,
    cat_id,
    edition,
    auth_id,
    id,
  ]);
  return result;
};
// Delete a book by ID
export const deleteBook = async (id: number): Promise<any> => {
  const sql = `DELETE FROM BOOKS WHERE bookId = ?`;
  const [result] = await db.execute(sql, [id]);
  return result;
};

// Get all return books
export const getAllReturnBooks = async (): Promise<ReturnBookType[]> => {
  const [rows] = await db.execute<RowDataPacket[]>(
    "SELECT readId, title, price, issue_date, due_date, return_date, isReturn from RETURN_DATES JOIN BOOKS ON BOOKS.bookId=RETURN_DATES.book_id"
  );
  return rows as ReturnBookType[];
};

// SELECT readId, Fname, title,issue_date, due_date,return_date, isReturn from RETURN_DATES JOIN BOOKS ON BOOKS.bookId=RETURN_DATES.book_id JOIN READERS ON RETURN_DATES.readId=READERS.rid;

// Get a return book by ID
export const getReturnBookById = async (
  id: number
): Promise<ReturnBookType[] | null> => {
  const [rows] = await db.execute<RowDataPacket[]>(
    "SELECT readId, title, price, issue_date, due_date, return_date, isReturn from RETURN_DATES JOIN BOOKS ON BOOKS.bookId=RETURN_DATES.book_id WHERE readId = ?",
    [id]
  );
  // const book = (rows as ReturnBookType[])[0];
  // return book || null;
  return rows as ReturnBookType[];
};

// INSERT INTO book_issues (rid, book_id, issue_date, due_date, return_date, isReturn, readId)
// VALUES (?, ?, ?, DATE_ADD(?, INTERVAL 15 DAY), ?, ?, ?)

// INSERT INTO RETURN_DATES (book_id, due_date, readId)
// VALUES
//   (10, DATE_ADD(CURRENT_TIMESTAMP, INTERVAL 15 DAY), 2),
//   (2, DATE_ADD(CURRENT_TIMESTAMP, INTERVAL 15 DAY), 2),
//   (3, DATE_ADD(CURRENT_TIMESTAMP, INTERVAL 15 DAY), 3),
//   (54, DATE_ADD(CURRENT_TIMESTAMP, INTERVAL 15 DAY), 4),
//   (50, DATE_ADD(CURRENT_TIMESTAMP, INTERVAL 15 DAY), 4);
