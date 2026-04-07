import axiosInstance from "../services/axiosInstance";

export interface LoginRequest {
  email: string;
  password: string;
}

export interface LoginResponse {
  token: string;
  user: {
    id: string;
    name: string;
    email: string;
    role: string;
    isAdmin: boolean;
  };
}

export const loginUser = async (data: LoginRequest) => {
  const response = await axiosInstance.post("/auth/login", data);
  console.log(response.data);
  return {
    token: response.data.token,
    user: {
      id: response.data.user.id,
      name: response.data.user.name,
      email: response.data.user.email,
      role: response.data.user.role,
      isAdmin: response.data.user.isAdmin,
    },
  };
};

export interface RegisterRequest {
  fname: string;
  lname: string;
  email: string;
  password: string;
}

export const registerUser = async (data: RegisterRequest) => {
  const response = await axiosInstance.post("/auth/register", data);
  return response.data; 
};

export const getProfile = async (): Promise<LoginResponse> => {
  const { data } = await axiosInstance.get("/auth/me");
  return data;
};