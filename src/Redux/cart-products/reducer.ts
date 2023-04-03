import { stat } from "fs";
import { TProductCard } from "../../types";
import { BASKET_PRODUCTS } from "./action-types";

type Item = {
  count: number;
  product: TProductCard;
};

export type CartReducer = {
  products: TProductCard[];
  countProduct: { [key: number]: Item };
};

const initialState: CartReducer = {
  products: [],
  countProduct: {},
};

export const productCartReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case BASKET_PRODUCTS.PUT_PRODUCT:
      return {
        ...state,
        products: [...state.products, action.payload],
      };

    case BASKET_PRODUCTS.COUNT:
      return {
        ...state,
        countProduct: {
          ...state.countProduct,
          [action.payload.barcode]: {
            product: action.payload.item,
            count: action.payload.count,
          },
        },
      };

    default:
      return state;
  }
};
