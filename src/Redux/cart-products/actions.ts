import { TProductCard } from "../../types";
import { BASKET_PRODUCTS } from "./action-types";

export const putProductInBasket = (value: TProductCard) => {
  return {
    type: BASKET_PRODUCTS.PUT_PRODUCT,
    payload: value,
  };
};

export const countProductsCart = (
  barcode: number,
  item: TProductCard,
  count: number
) => {
  return {
    type: BASKET_PRODUCTS.COUNT,
    payload: { barcode, item, count },
  };
};
