import axiosInstance from "./axiosInstance";

// Axios request interceptor
const authInterceptor = axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token"); // Fetch token from localStorage
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Export the interceptor to ensure it is initialized
export default authInterceptor; // import this authInterceptor in App.tsx or Main.tsx
