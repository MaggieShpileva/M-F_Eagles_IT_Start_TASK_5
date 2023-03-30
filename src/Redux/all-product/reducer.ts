import { ALL_PRODUCTS } from "./action-types";

const initialState = {
  allProducts: [],
};

export const getAllProductsReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case ALL_PRODUCTS.GET_ALL_PRODUCTS:
      return action.payload;
    default:
      return state;
  }
};
