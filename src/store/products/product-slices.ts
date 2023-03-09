import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import { Product } from "../../@types/product";
import { fetchProducts as fetchProductsApi } from "../api";

type ListProducts = Record<Product["id"], Product>;
interface InitialState {
  listProducts: ListProducts;
  status: string;
}

const initialState: InitialState = {
  listProducts: {},
  status: "",
};

export const fetchProducts = createAsyncThunk(
  "listProducts/fetchProduct",
  async () => {
    const response = await fetchProductsApi();
    return response.reduce((acc, product) => {
      acc[product.id] = product;
      return acc;
    }, {} as ListProducts);
  }
);

const productsListSlice = createSlice({
  name: "listProducts",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.pending, (state) => {
      state.status = "loading";
    });
    builder.addCase(fetchProducts.rejected, (state) => {
      state.status = "error";
    });
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.listProducts = action.payload;
      state.status = "complete";
    });
  },
});

export default productsListSlice.reducer;
