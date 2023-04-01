import { RootState } from "../RootState";

export const manufactureFilter = (state: RootState) => {
  return state.filterProducts;
};

export const searchProducts = (state: RootState) => {
  return state.filterProducts.searchProducts;
};

export const notFound = (state: RootState) => {
  return state.filterProducts.notFound;
};
