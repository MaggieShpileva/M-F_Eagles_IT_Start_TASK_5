import React, { FC, useEffect, useState } from "react";
import styles from "./index.module.scss";
import { data } from "../../data/JSON";
import { CardsOfProducts } from "../CardsOfProducts";
import { Filters } from "./Filters";
import { TypeProduct } from "./TypeProduct";
import { SortProduct } from "./SortProducts";
import { useSelector, useDispatch } from "react-redux";
import { selectAllProducts } from "../../Redux/all-product/selectors";
import { store } from "../../Redux/store";
import { PageTitle } from "../PageTitle";
import { allProducts } from "../../Redux/all-product/actions";

export const Products: FC = () => {
  return (
    <div className={styles.products}>
      <PageTitle title={"Косметика и гигиена"} />
      <div className={styles.container}>
        <SortProduct />
        <TypeProduct />
        <div className={styles.basic_contant}>
          <Filters />
          <CardsOfProducts />
        </div>
      </div>
    </div>
  );
};
