import { PRODUCT_FILTER } from "./action-types";

export const actionManufactureFilter = (value: any) => {
  return {
    type: PRODUCT_FILTER.MANUFACTURE_FILTER,
    payload: value,
  };
};
