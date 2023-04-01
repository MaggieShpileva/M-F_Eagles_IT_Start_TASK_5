import { combineReducers } from "redux";
import { filterReducer } from "./product-filter/reducer";
import { allProductsReducer } from "./all-product/reducer";
import { addProductReducer } from "./ProductPage/reducer";
import { productCartReducer } from "./basket-products/reducer";
import { filterProductsReducer } from "./select-products/reducer";

export default combineReducers({
  product: addProductReducer,
  products: allProductsReducer,
  cart: productCartReducer,
  filterProducts: filterReducer,
});
