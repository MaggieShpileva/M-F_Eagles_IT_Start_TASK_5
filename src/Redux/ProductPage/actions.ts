import { TProductCard } from "../../types";
import { PRODUCT_ACTIONS } from "./action-types";

export const actionSelectProduct = (value: TProductCard) => {
  return {
    type: PRODUCT_ACTIONS.ADD_PRODUCT,
    payload: value,
  };
};
