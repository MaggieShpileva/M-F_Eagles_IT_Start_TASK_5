import { combineReducers } from "redux";
import { filterReducer } from "./product-filter/reducer";
import { allProductsReducer } from "./all-product/reducer";
import { addProductReducer } from "./ProductPage/reducer";
import { productCartReducer } from "./cart-products/reducer";

export default combineReducers({
  product: addProductReducer,
  products: allProductsReducer,
  cart: productCartReducer,
  filterProducts: filterReducer,
});
