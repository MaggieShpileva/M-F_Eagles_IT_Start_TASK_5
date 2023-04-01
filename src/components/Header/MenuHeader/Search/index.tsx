import { FC, useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { selectAllProducts } from "../../../../Redux/all-product/selectors";
import {
  notFountProduct,
  searchProducts,
} from "../../../../Redux/product-filter/actions";
import { notFound } from "../../../../Redux/product-filter/selectors";
import { store } from "../../../../Redux/store";
import { ProductCardType } from "../../../../types";
import styles from "./index.module.scss";

export const Search: FC = () => {
  const [value, setValue] = useState("");
  const products = useSelector(selectAllProducts);
  let data: ProductCardType[] = [];
  let arr: string[] = [];
  const put = useDispatch();
  const handleChange = (event: React.FormEvent<HTMLInputElement>) => {
    setValue(event.currentTarget.value);
  };

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    let searchText = value.toLowerCase();
    if (searchText.trim() != "") {
      products.map((item) => {
        if (item.name.toLowerCase().indexOf(searchText) != -1) {
          data.push(item);
        }
      });
      if (data.length != 0) {
        put(searchProducts(data));
        put(notFountProduct(false));
      } else {
        put(searchProducts([]));
        put(notFountProduct(true));
      }
    }
    console.log(store.getState());
  };

  return (
    <div className={styles.search}>
      <input type="text" placeholder="Поиск..." onChange={handleChange} />
      <button className={styles.search_button} onClick={handleClick}></button>
      <button className={styles.search_button_mobile}>Поиск</button>
    </div>
  );
};
