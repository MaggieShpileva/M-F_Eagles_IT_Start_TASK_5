import React, { FC, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { selectAllProducts } from "../../../Redux/all-product/selectors";
import { filteredProducts } from "../../../Redux/product-filter/actions";
import { TProductCard } from "../../../types/index";
import styles from "./index.module.scss";

export const TypeProduct: FC = () => {
  const products = useSelector(selectAllProducts);
  const put = useDispatch();

  //выбор раздела товаров
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    let newDataProduct = products.filter((item: TProductCard) => {
      return item.filter.includes(event.currentTarget.name);
    });
    put(filteredProducts(newDataProduct));
  };

  return (
    <div className={styles.divs_with_sort}>
      <button
        name="body_care"
        className={styles.button_with_type}
        onClick={handleClick}
      >
        Уход за телом
      </button>

      <button
        name="hand_care"
        className={styles.button_with_type}
        onClick={handleClick}
      >
        Уход за руками
      </button>
      <button
        name="care_behind_the_legs"
        className={styles.button_with_type}
        onClick={handleClick}
      >
        Уход за ногами
      </button>
      <button
        className={styles.button_with_type}
        name="face_care"
        onClick={handleClick}
      >
        Уход за лицом
      </button>
    </div>
  );
};
