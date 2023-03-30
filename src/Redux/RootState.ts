import { ProductCard } from "../types";
import { CartReducer } from "./basket-products/reducer";

export type RootState = {
  allProducts: ProductCard;
  product: ProductCard;
  manufactureFilters: string;
  cart: CartReducer;
};
