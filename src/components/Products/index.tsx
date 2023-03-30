import React, { FC, useEffect, useState } from "react";
import styles from "./index.module.scss";
import { data } from "../../data/JSON";
import { CardsOfProducts } from "../CardsOfProducts";
import { SelectionPrice } from "./SelectionPrice";
import { TypeProduct } from "./TypeProduct";
import { SortProduct } from "./SortProducts";
import { useSelector } from "react-redux";
import { getAllProducts } from "../../Redux/all-product/selectors";
import { store } from "../../Redux/store";

export const Products: FC = () => {
  const dataOfProducts = JSON.parse(data);
  const [dataForCards, setDataForCards] = useState(dataOfProducts);
  const [startPriceValue, setStartPriceValue] = useState("");
  const [endPriceValue, setEndPriceValue] = useState("");
  //выбор типа сортировки
  const all_product = useSelector(getAllProducts);
  return (
    <div className={styles.container}>
      <div className={styles.breadcrumbs}></div>
      <div className={styles.title_of_page}>
        <div className={styles.title}>
          <h1>Косметика и гигиена</h1>
        </div>
        <SortProduct
          dataOfProducts={dataOfProducts}
          setDataForCards={setDataForCards}
        />
      </div>
      <TypeProduct
        startPriceValue={startPriceValue}
        setStartPriceValue={setStartPriceValue}
        endPriceValue={endPriceValue}
        setEndPriceValue={setEndPriceValue}
        dataOfProducts={dataOfProducts}
        setDataForCards={setDataForCards}
      />
      <div className={styles.basic_contant}>
        <SelectionPrice
          startPriceValue={startPriceValue}
          setStartPriceValue={setStartPriceValue}
          endPriceValue={endPriceValue}
          setEndPriceValue={setEndPriceValue}
          dataOfProducts={dataForCards}
          setDataForCards={setDataForCards}
        />
        <CardsOfProducts dataOfProducts={dataForCards} />
      </div>
    </div>
  );
};
