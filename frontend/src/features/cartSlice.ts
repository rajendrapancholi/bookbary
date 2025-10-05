// Define User interface
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { BookType } from "../api/bookApi";

interface CartState {
  cart: BookType[];
}

const initialState: CartState = {
  cart: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<BookType>) => {
      const book = action.payload;
      const bookExists = state.cart.some((item) => item.bookId === book.bookId);
      if (!bookExists) {
        state.cart.push(book);
      }
    },
    removeFromCart: (state, action: PayloadAction<number>) => {
      state.cart = state.cart.filter((book) => book.bookId !== action.payload);
    },
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;
