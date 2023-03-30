import { combineReducers } from "redux";
import { manufacureFilterReducer } from "./product-filter/reducer";
import { getAllProductsReducer } from "./all-product/reducer";
import { addProductReducer } from "./ProductPage/reducer";
import { productCartReducer } from "./basket-products/reducer";

export default combineReducers({
  product: addProductReducer,
  manufactureFilters: manufacureFilterReducer,
  allProducts: getAllProductsReducer,
  cart: productCartReducer,
});
