// /controllers/bookController.ts
import { Request, Response } from "express";
import asyncHandler from "../middlewares/asyncHandler";
import {
  getAllBooks,
  getBookById,
  createBook,
  updateBook,
  deleteBook,
  Book,
  getAllBks,
  getAllReturnBooks,
  getReturnBookById,
} from "../models/Book";

// Get all books
export const getBks = asyncHandler(async (req: Request, res: Response) => {
  const books = await getAllBks();
  res.status(200).json(books);
  // res.status(200).json({
  //   success: true,
  //   data: books,
  // });
});

// Get all books
export const getBooks = asyncHandler(async (req: Request, res: Response) => {
  const books = await getAllBooks();
  res.status(200).json(books);
  // res.status(200).json({
  //   success: true,
  //   data: books,
  // });
});

// Get a book by ID
export const getBook = asyncHandler(async (req: Request, res: Response) => {
  const { id } = req.params;
  const book = await getBookById(Number(id));

  if (!book) {
    return res.status(404).json({ success: false, message: "Book not found" });
  }
  res.status(200).json({
    success: true,
    data: book,
  });
});

// Create a new book
export const addBook = asyncHandler(async (req: Request, res: Response) => {
  const { title, price, quantity, cat_id, edition, auth_id } = req.body;
  console.log(req.body);
  if (
    !title ||
    !price ||
    !cat_id ||
    !edition ||
    !auth_id ||
    !quantity ||
    isNaN(quantity)
  ) {
    return res.status(400).json({ success: false, message: "Invalid input!" });
  }

  const newBook: Book = {
    title,
    price: Number(price),
    quantity: Number(quantity),
    cat_id: Number(cat_id),
    edition,
    auth_id: Number(auth_id),
  };
  try {
    const result = await createBook(newBook);
    res.status(201).json({
      success: true,
      message: `"${result.insertId}" Book created successfully!`,
    });
  } catch (err) {
    console.log("Error:", err);
    res.status(501).json({
      success: false,
      message: "Book not created successfully!",
    });
  }
});

// Update a book by ID
export const updateBookById = asyncHandler(
  async (req: Request, res: Response) => {
    const { id } = req.params;
    const { title, price, quantity, cat_id, edition, auth_id } = req.body;
    if (
      !title ||
      !price ||
      !cat_id ||
      !edition ||
      !auth_id ||
      !quantity ||
      isNaN(quantity)
    ) {
      return res
        .status(400)
        .json({ success: false, message: "Invalid input!" });
    }

    const book = await getBookById(Number(id));
    if (!book) {
      return res
        .status(404)
        .json({ success: false, message: "Book not found!" });
    }

    const updatedBook: Book = {
      title,
      price: Number(price),
      quantity: Number(quantity),
      cat_id: Number(cat_id),
      edition,
      auth_id: Number(auth_id),
    };

    try {
      await updateBook(Number(id), updatedBook);
      return res.status(200).json({
        success: true,
        message: `${book.bookId}: Book updated successfully!`,
      });
    } catch (error) {
      console.log("Error:", error);
      return res.status(404).json({
        success: false,
        message: "Book not found!",
      });
    }
  }
);

/* {
  "bookId": 3,
  "title": "Midnight's Children",
  "price": 260.000,
  "quntity":5,
  "cat_id": 1,
  "edition": "Special Edition",
  "auth_id": 3,
} */

// Delete a book by ID
export const deleteBookById = asyncHandler(
  async (req: Request, res: Response) => {
    const { id } = req.params;
    const book = await getBookById(Number(id));

    if (!book) {
      return res
        .status(404)
        .json({ success: false, message: `"${id}": Book not found` });
    }
    try {
      await deleteBook(Number(id));
      res.status(200).json({
        success: true,
        message: `"${book.bookId}": Book deleted successfully!`,
      });
    } catch (err) {
      console.error("Faile to delete:", err);
    }
  }
);

// Get all return books
export const getReturnBooks = asyncHandler(
  async (req: Request, res: Response) => {
    const books = await getAllReturnBooks();
    res.status(200).json(books);
  }
);

// Get return book by ID
export const getReturnBkById = asyncHandler(
  async (req: Request, res: Response) => {
    const { id } = req.params;
    const book = await getReturnBookById(Number(id));

    if (!book) {
      return res
        .status(404)
        .json({ success: false, message: "Book not found" });
    }

    res.status(200).json(book);
  }
);
