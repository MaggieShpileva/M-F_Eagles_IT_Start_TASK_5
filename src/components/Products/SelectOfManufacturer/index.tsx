import React, {
  DetailedHTMLProps,
  FC,
  HTMLAttributes,
  useEffect,
  useState,
} from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectAllProducts } from "../../../Redux/all-product/selectors";
import { putManufactureFilter } from "../../../Redux/product-filter/actions";
import { putFilterProducts } from "../../../Redux/select-products/actions";
import { store } from "../../../Redux/store";
import { ProductCardType } from "../../../types/index";
import styles from "./index.module.scss";

export const SelectOfManufacturer: FC = () => {
  const products = useSelector(selectAllProducts);
  const [filter, setFilter] = useState([]);
  const put = useDispatch();
  // g(products.products.map);
  const renderManufactures = () => {
    const resultArr = products.map((item: any) => {
      return item.manufacturer;
    });

    const res = Array.from(new Set(resultArr));
    return res.map((item, index) => {
      return (
        <div className={styles.checkbox_div} key={`${index}-${item}`}>
          <input
            type="checkbox"
            // onChange={(event) => handleChange(event, item)}
          />
          <p>{item}</p>
        </div>
      );
    });
  };

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    item?: string
  ) => {
    if (event.target.checked === true) {
      // put(putManufactureFilter(item));
      // setFilter([...filter, item]);
    } else {
      // filter.includes(item)
    }
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Производитель</h1>
      <div className={styles.search}>
        <input type="text" placeholder="Поиск..." />
        <button className={styles.search_button}></button>
        <button className={styles.search_button_mobile}>Поиск</button>
      </div>
      <div className={styles.manufacture_div}>{renderManufactures()}</div>
    </div>
  );
};
