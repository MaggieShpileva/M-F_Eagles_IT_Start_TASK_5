import { TProductCard } from "../../types";
import { ALL_PRODUCTS } from "./action-types";

export type ProductsReducer = {
  products: TProductCard[];
};

const initialState: ProductsReducer = {
  products: [],
};

export const allProductsReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case ALL_PRODUCTS.ADD_ALL_PRODUCTS:
      return action.payload;
    default:
      return state;
  }
};
