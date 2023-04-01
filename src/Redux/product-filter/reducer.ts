import { ProductCardType } from "../../types";
import { PRODUCT_FILTER } from "./action-types";

export type filterReducerType = {
  manufactureFilters: string[];
  searchProducts: ProductCardType[];
  notFound: boolean;
};
const initialState: filterReducerType = {
  manufactureFilters: [],
  searchProducts: [],
  notFound: false,
};

export const filterReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case PRODUCT_FILTER.PUT_MANUFACTURE_FILTER:
      return {
        ...state,
        manufactureFilters: [...state.manufactureFilters, action.payload],
      };
    case PRODUCT_FILTER.SEARCH_PRODUCTS:
      return { ...state, searchProducts: action.payload };

    case PRODUCT_FILTER.NOT_FOUND_PRODUCTS:
      return { ...state, notFound: action.payload };
    default:
      return state;
  }
};
