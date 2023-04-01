import { PRODUCT_FILTER } from "./action-types";

export const getManufactureFilter = (value: any) => {
  return {
    type: PRODUCT_FILTER.GET_MANUFACTURE_FILTER,
    payload: value,
  };
};

export const putManufactureFilter = (value: any) => {
  return {
    type: PRODUCT_FILTER.PUT_MANUFACTURE_FILTER,
    payload: value,
  };
};

export const searchProducts = (value: any) => {
  return {
    type: PRODUCT_FILTER.SEARCH_PRODUCTS,
    payload: value,
  };
};

export const notFountProduct = (value: boolean) => {
  return {
    type: PRODUCT_FILTER.NOT_FOUND_PRODUCTS,
    payload: value,
  };
};
