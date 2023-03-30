import React, { FC, useEffect, useState } from "react";
import { ProductCard } from "../../../types/index";
import styles from "./index.module.scss";

type Props = {
  dataOfProducts: ProductCard[];
  setDataForCards: React.Dispatch<any>;
};

export const SortProduct: FC<Props> = (props) => {
  const [sortType, setSortType] = useState("");

  // вычисление начальной и конечной цены

  const handleChangeSort = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSortType(event.target.value);
  };

  //сортирока товаров
  useEffect(() => {
    if (sortType == "price increase") {
      props.setDataForCards(
        props.dataOfProducts.sort((a: any, b: any) => {
          return a.price > b.price ? 1 : -1;
        })
      );
    } else if (sortType == "price reduction") {
      props.setDataForCards(
        props.dataOfProducts.sort((a: any, b: any) => {
          return a.price < b.price ? 1 : -1;
        })
      );
    } else if (sortType == "sort to name") {
      props.setDataForCards(
        props.dataOfProducts.sort((a: any, b: any) => {
          return a.brand > b.brand ? 1 : -1;
        })
      );
    } else if (sortType == "sort by popularity") {
      props.setDataForCards(props.dataOfProducts);
    }
  }, [sortType]);

  return (
    <div className={styles.container}>
      <div className={styles.sort}>
        <p className={styles.sort_title}>Сортировка:</p>
        <select value={sortType} name="" id="" onChange={handleChangeSort}>
          <option value="sort by popularity">По популярности</option>
          <option value="sort to name">Названию</option>
          <option value="price increase">Цена по возрастанию</option>
          <option value="price reduction">Цена по убыванию</option>
        </select>
      </div>
    </div>
  );
};
