import { RootState } from "../RootState";

export const selectCartProducts = (state: RootState) => {
  return state.filterProducts;
};
