import axiosInstance from "../services/axiosInstance";

const fetchAuthors = async () => {
  return await axiosInstance.get("/authors");
};

const createAuthor = async (author: CreateBookAuthourType) => {
  try {
    const response = await axiosInstance.post("/authors/", author);
    return response.data;
  } catch (err) {
    console.error("Error to create author:", err);
  }
};

export { fetchAuthors, createAuthor };

export interface CreateBookAuthourType {
  Fname: string;
  Lname: string;
  email: string;
  category: string;
  address: string;
}

export interface BookAuthourType {
  authId: number;
  auth_name: string;
  email: string;
  catagory: string;
  address: string;
}
