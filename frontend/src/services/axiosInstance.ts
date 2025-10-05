import axios from "axios";

const axiosInstance = axios.create({
  baseURL: import.meta.env.API_BASE_URL || "https://bookbary.onrender.com/api",
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

export default axiosInstance;
