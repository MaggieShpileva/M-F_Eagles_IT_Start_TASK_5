import { FC, useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { selectAllProducts } from "../../../../Redux/all-product/selectors";
import {
  isFound,
  searchProducts,
} from "../../../../Redux/product-filter/actions";
import { TProductCard } from "../../../../types";
import styles from "./index.module.scss";

export const Search: FC = () => {
  const [value, setValue] = useState("");
  const products = useSelector(selectAllProducts);
  let data: TProductCard[] = [];
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
        put(isFound(true));
      } else {
        put(searchProducts([]));
        put(isFound(false));
      }
    }
    setValue("");
  };

  return (
    <div className={styles.search}>
      <input
        type="text"
        placeholder="Поиск..."
        onChange={handleChange}
        value={value}
      />
      <button className={styles.search_button} onClick={handleClick}></button>
      <button className={styles.search_button_mobile}>Поиск</button>
    </div>
  );
};
