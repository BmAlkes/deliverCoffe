import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./CartReducer/cart-slice";

export const store = configureStore({
  reducer: {
    cartReducer,
  },
});
