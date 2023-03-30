import { RootState } from "../RootState";

export const getAllProducts = (state: RootState) => {
  return state.allProducts;
};
