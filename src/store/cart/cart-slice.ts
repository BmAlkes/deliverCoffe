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
interface InitialState {
  products: Product[];
  productsTotalPrice: number;
  deliver: number;
  paymentMethod: string;
  clientInformation?: InformationClientProps;
}

const initialState: InitialState = {
  products: [],
  productsTotalPrice: 0,
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

      // verificar se o produto já está no carrinho
      const productIsAlreadyInCart = state.products.some(
        (item) => item.id === product.id
      );

      // se sim -> aumentar sua quantidade
      if (productIsAlreadyInCart) {
        state.products = state.products.map((item) =>
          item.id === product.id
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
        (product) => product.id !== action.payload
      );
    },
    increaseCartProductQuantity: (state, action: PayloadAction<string>) => {
      state.products = state.products.map((product) =>
        product.id === action.payload
          ? { ...product, quantity: product.quantity + 1 }
          : product
      );
    },
    decreaseCartProductQuantity: (state, action: PayloadAction<string>) => {
      state.products = state.products
        .map((product) =>
          product.id === action.payload
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

// useEffect(() => {
//   localStorage.setItem("cartProducts", JSON.stringify(products));
// }, [products]);

// const productsTotalPrice = useMemo(() => {
//   return products.reduce((acc, currentProduct) => {
//     return acc + currentProduct.price * currentProduct.quantity + deliver;
//   }, 0);
// }, [products]);
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
