import { FILTER_PRODUCTS } from "./action-types";

export type SelectProductsReducerType = {
  products: string[];
};

const initialState: SelectProductsReducerType = {
  products: [],
};

export const filterProductsReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case FILTER_PRODUCTS.GET_PRODUCTS:
      return action.payload;
    case FILTER_PRODUCTS.PUT_PRODUCT:
      return {
        ...state,
        products: [...state.products, action.payload],
      };
    default:
      return state;
  }
};
