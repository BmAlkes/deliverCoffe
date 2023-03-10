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
    // addProductToCart: (state, action: PayloadAction<Product>) => {
    //   const product = action.payload;

    //   console.log(product);
    //   // verificar se o produto já está no carrinho
    //   const productIsAlreadyInCart = state.products.some((id) => id === id);

    //   // se sim -> aumentar sua quantidade
    //   if (productIsAlreadyInCart) {
    //     state.products = state.products.map((item) =>
    //       item.productId === product.id
    //         ? { ...item, quantity: item.quantity + 1 }
    //         : item
    //     );
    //     return;
    //   }
    //   // se não -> adicioná-lo
    //   state.products = [
    //     ...state.products,
    //     { ...product, quantity: product.quantity === 0 ? 1 : product.quantity },
    //   ];
    // },
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

      // state.products = state.products.map((product) =>
      //   product.productId === action.payload
      //     ? { ...product, quantity: product.quantity + 1 }
      //     : product
      // );
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

      // state.products = state.products
      //   .map((product) =>
      //     product.productId === action.payload
      //       ? { ...product, quantity: product.quantity - 1 }
      //       : product
      //   )
      //   .filter((product) => product.quantity > 0);
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
