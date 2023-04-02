import React, { FC, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { allProducts } from "../../../Redux/all-product/actions";
import { selectAllProducts } from "../../../Redux/all-product/selectors";
import { TProductCard } from "../../../types/index";
import { SelectBrands } from "./SelectBrands";
import { SelectManufacturer } from "./SelectManufacturer/index";
import styles from "./index.module.scss";
import { Price } from "./Price";

export const Filters: FC = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>ПОДБОР ПО ПАРАМЕТРАМ</h1>
      <Price />
      <SelectManufacturer />
      <SelectBrands />
    </div>
  );
};
