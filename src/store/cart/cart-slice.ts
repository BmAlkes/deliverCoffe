import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Product } from "../../@types/product";

interface InformationClientProps {
  name: string;
  street: string;
  number: number;
  complement: string;
  city: string;
  phone: number;
}

type CartProduct = {
  productId: Product["productId"];
  quantity: number;
};
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
    addProductToCart: (state, action: PayloadAction<Product>) => {
      const product = action.payload;

      console.log(product);
      // verificar se o produto já está no carrinho
      const productIsAlreadyInCart = state.products.some((id) => id === id);

      // se sim -> aumentar sua quantidade
      if (productIsAlreadyInCart) {
        state.products = state.products.map((item) =>
          item.productId === product.productId
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
        return;
      }
      // se não -> adicioná-lo
      state.products = [
        ...state.products,
        { ...product, quantity: product.quantity === 0 ? 1 : product.quantity },
      ];
    },
    removeProductFromCart: (state, action: PayloadAction<string>) => {
      state.products = state.products.filter(
        (product) => product.productId !== action.payload
      );
    },
    increaseCartProductQuantity: (state, action: PayloadAction<string>) => {
      state.products = state.products.map((product) =>
        product.productId === action.payload
          ? { ...product, quantity: product.quantity + 1 }
          : product
      );
    },
    decreaseCartProductQuantity: (state, action: PayloadAction<string>) => {
      state.products = state.products
        .map((product) =>
          product.productId === action.payload
            ? { ...product, quantity: product.quantity - 1 }
            : product
        )
        .filter((product) => product.quantity > 0);
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
  addProductToCart,
  removeProductFromCart,
  increaseCartProductQuantity,
  decreaseCartProductQuantity,
  clearCartProducts,
  paymentMethod,
  clientInformation,
} = cartSlice.actions;

export default cartSlice.reducer;
