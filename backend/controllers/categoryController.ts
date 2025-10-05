import { Request, Response } from "express";
import asyncHandler from "../middlewares/asyncHandler";
import {
  CategoryType,
  createCategory,
  getAllCategories,
  getCategoryById,
} from "../models/Category";

export const getCategories = asyncHandler(
  async (req: Request, res: Response) => {
    // Retrieve all category
    const category = await getAllCategories();

    // Check if category data exists
    if (!category || category.length === 0) {
      return res.status(404).json({ message: "No categories found!" });
    }
    res.status(200).json(category);
  }
);

export const getCategoryByID = asyncHandler(
  async (req: Request, res: Response) => {
    const { id } = req.params;
    const category = await getCategoryById(Number(id));

    // Check if author data exists
    if (!category) {
      return res.status(404).json({ message: "No category found" });
    }
    res.status(200).json(category);
  }
);

export const addCategory = asyncHandler(async (req: Request, res: Response) => {
  const { category_name } = req.body;
  if (!category_name) {
    return res.status(400).json({
      success: false,
      message: "Invalid input!",
    });
  }
  const newCategory: CategoryType = {
    category_name: String(category_name),
  };
  try {
    const result = await createCategory(newCategory);
    res.status(201).json({
      success: true,
      message: `"${result.insertId}" Author created succefully!`,
    });
  } catch (err) {
    console.error("Error:", err);
    res.status(501).json({
      success: false,
      message: "Error to create a new author!",
    });
  }
});
