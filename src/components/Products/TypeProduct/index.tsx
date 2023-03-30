import React, { FC, useEffect, useState } from "react";
import { ProductCard } from "../../../types/index";
import styles from "./index.module.scss";

type Props = {
  startPriceValue: string;
  endPriceValue: string;
  setStartPriceValue: React.Dispatch<React.SetStateAction<string>>;
  setEndPriceValue: React.Dispatch<React.SetStateAction<string>>;
  dataOfProducts: ProductCard[];
  setDataForCards: React.Dispatch<any>;
};

export const TypeProduct: FC<Props> = (props) => {
  //выбор раздела товаров
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    let newDataOfProduct = props.dataOfProducts.filter((item: ProductCard) => {
      return item.filter.includes(event.currentTarget.name);
    });
    props.setDataForCards(newDataOfProduct);
    handleData(newDataOfProduct);
  };
  // запись начальной и конечной цены
  const handleData = (data: any) => {
    let newData = data.slice().sort((a: any, b: any) => {
      return a.price > b.price ? 1 : -1;
    });
    props.setStartPriceValue(newData[0].price);
    props.setEndPriceValue(newData[newData.length - 1].price);
  };
  return (
    <div className={styles.divs_with_sort}>
      <button
        name="body care"
        className={styles.button_with_type}
        onClick={handleClick}
      >
        Уход за телом
      </button>

      <button
        name="hand care"
        className={styles.button_with_type}
        onClick={handleClick}
      >
        Уход за руками
      </button>
      <button
        name="care
          behind the legs"
        className={styles.button_with_type}
        onClick={handleClick}
      >
        Уход за ногами
      </button>
      <button
        className={styles.button_with_type}
        name="face care"
        onClick={handleClick}
      >
        Уход за лицом
      </button>
    </div>
  );
};
