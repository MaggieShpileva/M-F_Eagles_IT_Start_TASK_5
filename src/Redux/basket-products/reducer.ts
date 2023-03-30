import { ProductCard } from "../../types";
import { BASKET_PRODUCTS } from "./action-types";

export type CartReducer = {
  products: ProductCard[];
};

const initialState: CartReducer = {
  products: [],
};

export const productCartReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case BASKET_PRODUCTS.GET_PRODUCTS:
      return action.payload;
    case BASKET_PRODUCTS.PUT_PRODUCT:
      return {
        ...state,
        products: [...state.products, action.payload],
      };
    default:
      return state;
  }
};
