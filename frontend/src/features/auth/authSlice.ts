import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AuthState, User } from "./authType";

// Utility function to load state from localStorage
const loadStateFromLocalStorage = () => {
  const token = localStorage.getItem("token");
  const userData = localStorage.getItem("user");

  if (token && userData) {
    try {
      const user: User = JSON.parse(userData);
      return {
        token,
        user,
        isAuthenticated: true,
      };
    } catch (error) {
      console.error("Error parsing user data from localStorage:", error);
    }
  }

  return {
    token: null,
    user: null,
    isAuthenticated: false,
  };
};

// Initial state from localStorage or default
const initialState: AuthState = loadStateFromLocalStorage();

// Create auth slice
const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    // Login Success Action
    loginSuccess: (
      state,
      action: PayloadAction<{ token: string; user: User }>
    ) => {
      state.token = action.payload.token;
      state.user = action.payload.user;
      state.isAuthenticated = true;

      // Save to localStorage
      localStorage.setItem("token", action.payload.token);
      localStorage.setItem("user", JSON.stringify(action.payload.user));
    },

    // Logout Action
    logout: (state) => {
      state.token = null;
      state.user = null;
      state.isAuthenticated = false;

      // Clear localStorage
      localStorage.removeItem("token");
      localStorage.removeItem("user");
    },

    // Update User Info Action (e.g., profile updates)
    updateUserInfo: (state, action: PayloadAction<User>) => {
      if (state.user) {
        state.user = { ...state.user, ...action.payload };
        localStorage.setItem("user", JSON.stringify(state.user));
      }
    },
  },
});

export const { loginSuccess, logout, updateUserInfo } = authSlice.actions;
export default authSlice.reducer;
