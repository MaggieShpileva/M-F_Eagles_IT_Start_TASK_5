import { ALL_PRODUCTS } from "./action-types";

export const getAllProduct = (value: any) => {
  return {
    type: ALL_PRODUCTS.GET_ALL_PRODUCTS,
    payload: value,
  };
};
