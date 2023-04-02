import { RootState } from "../RootState";

export const selectCartProducts = (state: RootState) => {
  return state.cart.products;
};

export const selectCount = (state: RootState) => {
  return state.cart.countProduct;
};
