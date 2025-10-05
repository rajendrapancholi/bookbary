import express from "express";
import {
  getBooks,
  getBook,
  addBook,
  updateBookById,
  deleteBookById,
  getBks,
  getReturnBooks,
  getReturnBkById,
} from "../controllers/bookController";
import { adminOnly, protect } from "../middlewares/authMiddleware";

const router = express.Router();

// Public Routes
router.get("/bk", getBks); // Get all books
router.get("/", protect, getBooks); // Get all books
router.get("/returnbooks", protect, getReturnBooks); // Get all return books
router.get("/returnbooks/:id", protect, getReturnBkById); // Get all return books
router.get("/:id", protect, getBook); // Get a book by ID

// Protected Routes (Only Admin/Authorized)
router.post("/", adminOnly, addBook); // Add a new book
router.put("/:id", adminOnly, updateBookById); // Update book by ID
router.delete("/:id", adminOnly, deleteBookById); // Delete book by ID

export default router;
