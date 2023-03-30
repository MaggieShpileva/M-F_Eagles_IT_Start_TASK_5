import { PRODUCT_FILTER } from "./action-types";

const initialState = {
  manufactureFilters: [],
};

export const manufacureFilterReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case PRODUCT_FILTER.MANUFACTURE_FILTER:
      return action.payload;
    default:
      return state;
  }
};
