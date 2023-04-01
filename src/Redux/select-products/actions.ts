import { FILTER_PRODUCTS } from "./action-types";

export const getFilterProducts = (value: string) => {
  return {
    type: FILTER_PRODUCTS.GET_PRODUCTS,
    payload: value,
  };
};

export const putFilterProducts = (value: string) => {
  return {
    type: FILTER_PRODUCTS.PUT_PRODUCT,
    payload: value,
  };
};
