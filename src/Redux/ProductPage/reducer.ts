import { PRODUCT_ACTIONS } from "./action-types";

const initialState = {
  product: {
    filter: [],
    url: "",
    name: "",
    size_type: "",
    size: "",
    barcode: 0,
    manufacturer: "",
    brand: "",
    description: "",
    price: 0,
    count_product: 0,
  },
};

export const addProductReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case PRODUCT_ACTIONS.ADD_PRODUCT:
      return action.payload;
    default:
      return state;
  }
};
