import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CartProduct, Product } from "../../@types/product";

interface InformationClientProps {
  name: string;
  street: string;
  number: number;
  complement: string;
  city: string;
  phone: number;
}

interface InitialState {
  products: CartProduct[];
  deliver: number;
  paymentMethod: string;
  clientInformation?: InformationClientProps;
}

const initialState: InitialState = {
  products: [],
  deliver: 10,
  paymentMethod: "",
  clientInformation: {
    city: "",
    complement: "",
    name: "",
    number: 0,
    phone: 0,
    street: "",
  },
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    removeProductFromCart: (state, action: PayloadAction<Product["id"]>) => {
      state.products = state.products.filter(
        (product) => product.productId !== action.payload
      );
    },
    increaseCartProductQuantity: (
      state,
      action: PayloadAction<Product["id"]>
    ) => {
      const item = state.products.find(
        ({ productId }) => productId === action.payload
      );
      if (item) {
        item.quantity += 1;
      } else {
        state.products.push({ productId: action.payload, quantity: 1 });
      }
    },
    decreaseCartProductQuantity: (
      state,
      action: PayloadAction<Product["id"]>
    ) => {
      const item = state.products.find(
        ({ productId }) => productId === action.payload
      );
      if (!item) {
        return;
      }
      if (item.quantity === 1) {
        state.products = state.products.filter((current) => current !== item);
      } else {
        item.quantity -= 1;
      }
    },
    clearCartProducts: (state) => {
      state.products = [];
    },
    paymentMethod: (state, action) => {
      state.paymentMethod = action.payload;
    },
    clientInformation: (state, action) => {
      state.clientInformation = action.payload;
    },
  },
});

export const {
  // addProductToCart,
  removeProductFromCart,
  increaseCartProductQuantity,
  decreaseCartProductQuantity,
  clearCartProducts,
  paymentMethod,
  clientInformation,
} = cartSlice.actions;

export default cartSlice.reducer;
