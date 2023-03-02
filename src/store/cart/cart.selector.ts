import { RootState } from "../store";

export const selectProductTotalPriceWithDelive = (state: RootState) => {
  const deliver = state.cart.deliver;
  return state.cart.products.reduce((acc, currentProduct) => {
    return acc + currentProduct.price * currentProduct.quantity + deliver;
  }, 0);
};
export const selectProductTotalPrice = (state: RootState) => {
  return state.cart.products.reduce((acc, currentProduct) => {
    return acc + currentProduct.price * currentProduct.quantity;
  }, 0);
};
