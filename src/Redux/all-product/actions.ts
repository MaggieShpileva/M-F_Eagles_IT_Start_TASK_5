import { ALL_PRODUCTS } from "./action-types";

export const allProducts = (value: any) => {
  return {
    type: ALL_PRODUCTS.ADD_ALL_PRODUCTS,
    payload: value,
  };
};
