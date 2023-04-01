import React, { FC, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { selectAllProducts } from "../../../Redux/all-product/selectors";
import { ProductCardType } from "../../../types/index";
import styles from "./index.module.scss";

type Props = {};

export const SortProduct: FC<Props> = (props) => {
  const [sortType, setSortType] = useState("");
  const products = useSelector(selectAllProducts);
  // const [newData, setNewData] = useState([]);
  // вычисление начальной и конечной цены
  let newProducts = [];
  const handleChangeSort = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSortType(event.target.value);
  };
  //сортирока товаров
  useEffect(() => {
    if (sortType == "price increase") {
      // setNewData(
      newProducts = products.slice().sort((a: any, b: any) => {
        return a.price > b.price ? 1 : -1;
      });
      // console.log(newProducts);
      // );
    }
    // else if (sortType == "price reduction") {
    //   props.setDataForCards(
    //     props.dataOfProducts.sort((a: any, b: any) => {
    //       return a.price < b.price ? 1 : -1;
    //     })
    //   );
    // } else if (sortType == "sort to name") {
    //   props.setDataForCards(
    //     props.dataOfProducts.sort((a: any, b: any) => {
    //       return a.brand > b.brand ? 1 : -1;
    //     })
    //   );
    // } else if (sortType == "sort by popularity") {
    //   props.setDataForCards(products);
    // }
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
