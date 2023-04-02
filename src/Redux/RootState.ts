import { TProductCard } from "../types";
import { ProductsReducer } from "./all-product/reducer";
import { CartReducer } from "./cart-products/reducer";
import { filterReducer, filterReducerType } from "./product-filter/reducer";

export type RootState = {
  products: ProductsReducer;
  product: TProductCard;
  cart: CartReducer;
  filterProducts: filterReducerType;
};
