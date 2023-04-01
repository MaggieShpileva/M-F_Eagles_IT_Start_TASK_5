import { ProductCardType } from "../../types";
import { BASKET_PRODUCTS } from "./action-types";

export const getAllBasketProduct = (value: any) => {
  return {
    type: BASKET_PRODUCTS.GET_PRODUCTS,
    payload: value,
  };
};

export const putProductInBasket = (value: ProductCardType) => {
  return {
    type: BASKET_PRODUCTS.PUT_PRODUCT,
    payload: value,
  };
};
