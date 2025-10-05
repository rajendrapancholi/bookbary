import axiosInstance from "../services/axiosInstance";

const fetchCategories = async () => {
  return await axiosInstance.get("/categories");
};

const createCategory = async (newCategory: BookCategorytType) => {
  try {
    const response = await axiosInstance.post("/categories", newCategory);
    console.log(response.data);
    return response.data;
  } catch (err) {
    console.error("Error to create category:", err);
  }
};

export { fetchCategories, createCategory };

export interface BookCategorytType {
  cat_id?: number;
  category_name: string;
}
