import axiosInstance from "../services/axiosInstance";

const fetchBooks = async () => {
  return await axiosInstance.get("/books");
};

const fetchReturnBooks = async () => {
  return await axiosInstance.get("/books/returnbooks");
};

const fetchReturnBookById = async (id: string) => {
  return await axiosInstance.get(`/books/returnbooks/${id}`);
};

const fetchBookById = async (id: string) => {
  return await axiosInstance.get(`/books/${id}`);
};

const updateBookById = async (book: UpdateBookType) => {
  if (book) {
    try {
      const response = await axiosInstance.put(`/books/${book.bookId}`, book); // Assuming PUT request to update book
      return response.data;
    } catch (error) {
      console.error("Error updating book");
    }
  }
};

const createBook = async (newBook: UpdateBookType) => {
  try {
    const response = await axiosInstance.post(`/books/`, newBook);
    console.log(response);
    return response.data;
  } catch (err) {
    console.error("Error to creating book:", err);
  }
};

const deleteBookById = async (bookId: number) => {
  try {
    const response = await axiosInstance.delete(`/books/${bookId}`);
    return response.data;
  } catch (err) {
    console.error("Failed to deleting a book:", err);
  }
};
export {
  fetchBooks,
  fetchBookById,
  fetchReturnBooks,
  fetchReturnBookById,
  updateBookById,
  createBook,
  deleteBookById,
};

export interface BookType {
  bookId: number;
  title: string;
  price: number;
  quantity: number;
  category_name: string;
  edition: string;
  auth_id: string;
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
export interface FetchBookType {
  success: boolean;
  data: {
    bookId: string;
    title: string;
    price: string;
    quantity: string;
    cat_id: string;
    edition: string;
    auth_id: string;
  };
}
export interface UpdateBookType {
  bookId?: string;
  title: string;
  price: string;
  quantity: string;
  cat_id: string;
  edition: string;
  auth_id: string;
}
