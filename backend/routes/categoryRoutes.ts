import express from "express";

import { adminOnly, protect } from "../middlewares/authMiddleware";
import {
  addCategory,
  getCategories,
  getCategoryByID,
} from "../controllers/categoryController";

const router = express.Router();

router.get("/", protect, getCategories); // get all category
router.post("/", adminOnly, addCategory); // add new category
router.get("/:id", protect, getCategoryByID);

export default router;
