import db from "../config/db";
import { ResultSetHeader, RowDataPacket } from "mysql2";

export interface CategoryType {
  cat_id?: number;
  category_name: string;
}

// Get all category
export const getAllCategories = async (): Promise<CategoryType[]> => {
  const [rows] = await db.execute<RowDataPacket[]>(
    "SELECT * FROM BOOK_CATEGORY ORDER BY cat_id"
  );
  return rows as CategoryType[];
};

// Get a category by ID
export const getCategoryById = async (
  id: number
): Promise<CategoryType | null> => {
  const [rows] = await db.execute<RowDataPacket[]>(
    "SELECT * FROM BOOK_CATEGORY WHERE cat_id = ?",
    [id]
  );
  const category = (rows as CategoryType[])[0];
  return category || null;
};

// Create a new category
export const createCategory = async (
  category: CategoryType
): Promise<ResultSetHeader> => {
  const { category_name } = category;
  const sql = `INSERT INTO BOOK_CATEGORY (category_name) VALUES (?)`;
  const [result] = await db.execute<ResultSetHeader>(sql, [category_name]);
  return result;
};
