import { ProductCard } from "../../types";
import { RootState } from "../RootState";

export const selectProduct = (state: RootState) => {
  return state.product;
};
