import { useMutation } from "@tanstack/react-query";
import { useDispatch } from "react-redux";
import { loginSuccess } from "../features/auth/authSlice";
import {
  loginUser,
  LoginRequest,
  LoginResponse,
  RegisterRequest,
  registerUser,
  getProfile,
} from "../api/authApi";

// Define the useAuth hook
export const useAuth = () => {
  const dispatch = useDispatch();

  // Mutation to handle user login
  const loginMutation = useMutation<LoginResponse, Error, LoginRequest>({
    mutationFn: (data: LoginRequest) => loginUser(data),
    onSuccess: (data) => {
      // Dispatch login success with token and user details
      dispatch(
        loginSuccess({
          token: data.token,
          user: data.user,
        }),
      );
    },
    onError: (error) => {
      console.error("Login failed:", error.message);
    },
  });

  const registerMutation = useMutation<any, Error, RegisterRequest>({
    mutationFn: (data: RegisterRequest) => registerUser(data),
  });

  const oauthSyncMutation = useMutation<LoginResponse, Error, void>({
    mutationFn: getProfile,
    onSuccess: (data) => {
      dispatch(
        loginSuccess({
          token: data.token,
          user: data.user,
        }),
      );
    },
  });

  return {
    login: loginMutation.mutate,
    isLoggingIn: loginMutation.status === "pending",
    loginError: loginMutation.error,

    register: registerMutation.mutate,
    isRegistering: registerMutation.status === "pending",
    registerError: registerMutation.error,

    syncOAuth: oauthSyncMutation.mutate,
    isSyncing: oauthSyncMutation.isPending,
  };
};
