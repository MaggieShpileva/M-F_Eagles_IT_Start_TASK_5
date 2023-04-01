import React, { FC, useEffect, useState } from "react";
import styles from "./index.module.scss";
import { data } from "../../data/JSON";
import { CardsOfProducts } from "../CardsOfProducts";
import { SelectionPrice } from "./SelectionPrice";
import { TypeProduct } from "./TypeProduct";
import { SortProduct } from "./SortProducts";
import { useSelector, useDispatch } from "react-redux";
import { selectAllProducts } from "../../Redux/all-product/selectors";
import { store } from "../../Redux/store";
import { PageTitle } from "../PageTitle";
import { allProducts } from "../../Redux/all-product/actions";

export const Products: FC = () => {
  const dataOfProducts = JSON.parse(data);
  // const [startPriceValue, setStartPriceValue] = useState("");
  // const [endPriceValue, setEndPriceValue] = useState("");
  //выбор типа сортировки
  const put = useDispatch();
  put(allProducts(dataOfProducts));
  return (
    <>
      <PageTitle title={"Косметика и гигиена"} />
      <div className={styles.container}>
        <SortProduct />
        {/* 
   <TypeProduct
          startPriceValue={startPriceValue}
          setStartPriceValue={setStartPriceValue}
          endPriceValue={endPriceValue}
          setEndPriceValue={setEndPriceValue}
          dataOfProducts={dataOfProducts}
          setDataForCards={setDataForCards}
        />  */}
        <div className={styles.basic_contant}>
          <SelectionPrice />
          <CardsOfProducts />
        </div>
      </div>
    </>
  );
};
