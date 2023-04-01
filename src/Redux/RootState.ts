import { ProductCardType } from "../types";
import { ProductsReducer } from "./all-product/reducer";
import { CartReducer } from "./basket-products/reducer";
import { filterReducer, filterReducerType } from "./product-filter/reducer";

export type RootState = {
  products: ProductsReducer;
  product: ProductCardType;
  cart: CartReducer;
  filterProducts: filterReducerType;
};
