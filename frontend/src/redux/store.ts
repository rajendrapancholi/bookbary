import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/auth/authSlice";
import cartReducer from "../features/cartSlice";
const store = configureStore({
  reducer: {
    auth: authReducer,
    cart: cartReducer,
  },

  middleware: (
    getDefaultMiddleware // Adding custom middleware
  ) =>
    // to the default middleware provided by Redux Toolkit
    // to handle non-serializable data
    getDefaultMiddleware({
      serializableCheck: false, // Avoid warnings for non-serializable data like JWT tokens
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
