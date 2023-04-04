import { RootState } from "../RootState";

export const manufactureFilter = (state: RootState) => {
  return state.filterProducts.manufactureFilters;
};

export const brandFilter = (state: RootState) => {
  return state.filterProducts.brandFilters;
};

export const searchProducts = (state: RootState) => {
  return state.filterProducts.searchProducts;
};

export const selectIsFound = (state: RootState) => {
  return state.filterProducts.isFound;
};

export const selectFilteredProducts = (state: RootState) => {
  return state.filterProducts.filteredProducts;
};
