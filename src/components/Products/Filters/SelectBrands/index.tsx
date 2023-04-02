import React, {
  DetailedHTMLProps,
  FC,
  HTMLAttributes,
  useEffect,
  useState,
} from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectAllProducts } from "../../../../Redux/all-product/selectors";
import {
  putBrandFilter,
  putManufactureFilter,
} from "../../../../Redux/product-filter/actions";
import { TProductCard } from "../../../../types/index";
import styles from "./index.module.scss";

export const SelectBrands: FC = () => {
  const products = useSelector(selectAllProducts);
  const [filterArr, setFilterArr] = useState<TProductCard[]>([]);
  const put = useDispatch();
  const [listBrands, setListBrands] = useState<string[]>([]);
  //запись всех производителей
  const renderBrands = () => {
    const resultArr = products.map((item: any) => {
      return item.brand;
    });

    //сортировка производителей
    const res = Array.from(new Set(resultArr));

    //отрисовка чекбоксов с производителями
    return res.map((item: string, index) => {
      return (
        <div className={styles.checkbox_div} key={`${index}-${item}`}>
          <input
            type="checkbox"
            onChange={(event) => handleChangeBrand(event, item)}
          />
          <p>{item}</p>
        </div>
      );
    });
  };

  const handleChangeBrand = (
    event: React.ChangeEvent<HTMLInputElement>,
    item?: string
  ) => {
    let result = [];
    if (event.target.checked == true && item != undefined) {
      result.push(item);
      setListBrands((prevArr) => [...prevArr, item]);
    } else {
      setListBrands(
        listBrands.filter((key) => {
          return key != item;
        })
      );
    }
  };

  useEffect(() => {
    const res = Array.from(new Set(listBrands));
    put(putBrandFilter(res));
  }, [listBrands]);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Бренд</h1>
      <div className={styles.search}>
        <input type="text" placeholder="Поиск..." />
        <button className={styles.search_button}></button>
        <button className={styles.search_button_mobile}>Поиск</button>
      </div>
      <div className={styles.manufacture_div}>{renderBrands()}</div>
    </div>
  );
};
