import { Request, Response } from "express";
import asyncHandler from "../middlewares/asyncHandler";
import {
  AuthorType,
  createAuthor,
  CreateAuthorType,
  getAllAuthors,
  getAuthorById,
} from "../models/Author";

export const getAuthors = asyncHandler(async (req: Request, res: Response) => {
  // Retrieve all authors
  const authors = await getAllAuthors();

  // Check if authors data exists
  if (!authors || authors.length === 0) {
    return res.status(404).json({ message: "No authors found" });
  }
  res.status(200).json(authors);

  //   // Map over authors to extract the required fields
  //   const authorsData = authors.map((author: AuthorType) => ({
  //     authId: author.authId,
  //     auth_name: author.Fname + " " + author.Lname,
  //     email: author.email,
  //     category: author.category,
  //     address: author.address,
  //   }));
  // Send the response
});

export const addAuthor = asyncHandler(async (req: Request, res: Response) => {
  const { Fname, Lname, email, category, address } = req.body;
  if (!Fname || !Lname || !email || !category || !address) {
    return res.status(400).json({
      success: false,
      message: "Invalid input!",
    });
  }
  const author: CreateAuthorType = {
    Fname,
    Lname,
    email,
    category,
    address,
  };
  try {
    const result = await createAuthor(author);
    return res.status(201).json({
      success: true,
      message: `"${result.insertId}" authot created succefully!`,
    });
  } catch (err) {
    console.log("Error:", err);
    res.status(501).json({
      success: false,
      message: "Author not created successfully!",
    });
  }
});

export const getAuthorByID = asyncHandler(
  async (req: Request, res: Response) => {
    const { id } = req.params;
    const author = await getAuthorById(Number(id));

    // Check if author data exists
    if (!author) {
      return res.status(404).json({ message: "No authors found" });
    }
    res.status(200).json(author);
  }
);
