import { useSelector } from "react-redux";
import { TProductCard } from "../../types";
import { selectAllProducts } from "../all-product/selectors";
import { PRODUCT_FILTER } from "./action-types";

export type filterReducerType = {
  manufactureFilters: string[];
  brandFilters: string[];
  searchProducts: TProductCard[];
  notFound: boolean;
  filteredProducts: TProductCard[];
};
const initialState: filterReducerType = {
  manufactureFilters: [],
  brandFilters: [],
  searchProducts: [],
  notFound: false,
  filteredProducts: [],
};

export const filterReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case PRODUCT_FILTER.PUT_MANUFACTURE_FILTER:
      return {
        ...state,
        manufactureFilters: action.payload,
      };
    case PRODUCT_FILTER.PUT_BRAND_FILTER:
      return {
        ...state,
        brandFilters: action.payload,
      };

    case PRODUCT_FILTER.SEARCH_PRODUCTS:
      return { ...state, searchProducts: action.payload };

    case PRODUCT_FILTER.NOT_FOUND_PRODUCTS:
      return { ...state, notFound: action.payload };
    case PRODUCT_FILTER.FILTERED_PRODUCTS:
      return { ...state, filteredProducts: action.payload };
    default:
      return state;
  }
};
