import { RootState } from "../store";

export const selectProductTotalPrice = (state: RootState) => {
  return state.cart.products.reduce((acc, currentProduct) => {
    return (
      acc +
      state.product.listProducts[currentProduct.productId].price *
        currentProduct.quantity
    );
  }, 0);
};

export const selectProductTotalPriceWithDelive = (state: RootState) => {
  const deliver = state.cart.deliver;

  return selectProductTotalPrice(state) + deliver;
};
