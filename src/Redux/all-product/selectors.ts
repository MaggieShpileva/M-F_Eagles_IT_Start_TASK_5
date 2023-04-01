import { RootState } from "../RootState";

export const selectAllProducts = (state: RootState) => {
  return state.products.products;
};
