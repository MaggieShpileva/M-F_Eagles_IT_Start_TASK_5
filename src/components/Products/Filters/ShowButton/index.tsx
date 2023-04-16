import { FC } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { selectAllProducts } from "../../../../Redux/all-product/selectors";
import { filteredProducts } from "../../../../Redux/product-filter/actions";
import {
  brandFilter,
  manufactureFilter,
} from "../../../../Redux/product-filter/selectors";
import { store } from "../../../../Redux/store";
import styles from "./index.module.scss";

export const ShowButton: FC = () => {
  const manufactureProducts = useSelector(manufactureFilter);
  const put = useDispatch();
  const brandFilters = useSelector(brandFilter);
  const products = useSelector(selectAllProducts);
  const handleClick = () => {
    const arrFilteredProducts = products.filter((product) => {
      return (
        (manufactureProducts.length === 0 ||
          manufactureProducts.includes(product.manufacturer)) &&
        (brandFilters.length === 0 || brandFilters.includes(product.brand))
      );
    });
    put(filteredProducts(arrFilteredProducts));
    console.log(store.getState().filterProducts);
  };

  return (
    <div className={styles.ShowButton}>
      <button className={styles.show_button} onClick={() => handleClick()}>
        Показать
      </button>
    </div>
  );
};
