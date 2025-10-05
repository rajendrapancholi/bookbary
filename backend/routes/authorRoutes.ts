import express from "express";

import { adminOnly, protect } from "../middlewares/authMiddleware";
import {
  addAuthor,
  getAuthorByID,
  getAuthors,
} from "../controllers/authorController";

const router = express.Router();

router.get("/", protect, getAuthors);
router.post("/", adminOnly, addAuthor); // Add a new book
router.put("/:id", protect, getAuthorByID); // Update book by ID
// router.put("/:id", protect, updateBookById); // Update book by ID

export default router;
