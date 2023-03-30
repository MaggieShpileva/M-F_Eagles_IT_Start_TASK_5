import React, { DetailedHTMLProps, FC, HTMLAttributes, useEffect } from "react";
import { ProductCard } from "../../../types/index";
import styles from "./index.module.scss";

type Props = {
  // startPriceValue: string;
  // endPriceValue: string;
  // setStartPriceValue: React.Dispatch<React.SetStateAction<string>>;
  // setEndPriceValue: React.Dispatch<React.SetStateAction<string>>;
  dataOfProducts: ProductCard[];
  setDataForCards: React.Dispatch<any>;
};

export const SelectOfManufacturer: FC<Props> = (props) => {
  const renderManufactures = () => {
    // let result: any = [];

    // for (let str of props.dataOfProducts) {
    //   if (!result.includes(str.manufacturer)) {
    //     result.push(str.manufacturer);
    //   }
    // }

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      console.log(event.target.checked);
    };

    return props.dataOfProducts.map((item: ProductCard, index: number) => {
      return (
        <div className={styles.checkbox_div} key={`${index}-${item.barcode}`}>
          <input type="checkbox" onChange={(event) => handleChange(event)} />
          <p>{item.manufacturer}</p>
        </div>
      );
    });
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
