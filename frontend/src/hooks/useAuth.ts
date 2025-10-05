import { useMutation } from "@tanstack/react-query";
import { useDispatch } from "react-redux";
import { loginSuccess } from "../features/auth/authSlice";
import { loginUser, LoginRequest, LoginResponse } from "../api/authApi";

// Define the useAuth hook
export const useAuth = () => {
  const dispatch = useDispatch();

  // Mutation to handle user login
  const { mutate, status, isError, error } = useMutation<
    LoginResponse,
    Error,
    LoginRequest
  >({
    mutationFn: (data: LoginRequest) => loginUser(data),
    onSuccess: (data) => {
      // Dispatch login success with token and user details
      dispatch(
        loginSuccess({
          token: data.token,
          user: data.user,
        })
      );
    },
    onError: (error) => {
      console.error("Login failed:", error.message);
    },
  });

  return { mutate, status, isError, error };
};
