import React, { FC, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { allProducts } from "../../../Redux/all-product/actions";
import { selectAllProducts } from "../../../Redux/all-product/selectors";
import { ProductCardType } from "../../../types/index";
import { SelectOfManufacturer } from "../SelectOfManufacturer/index";
import styles from "./index.module.scss";

type Props = {
  startPriceValue?: string;
  endPriceValue?: string;
  setStartPriceValue?: React.Dispatch<React.SetStateAction<string>>;
  setEndPriceValue?: React.Dispatch<React.SetStateAction<string>>;
  dataOfProducts?: ProductCardType[];
  setDataForCards?: React.Dispatch<any>;
};

export const SelectionPrice: FC<Props> = (props) => {
  const products = useSelector(selectAllProducts);
  // вычисление начальной и конечной цены
  useEffect(() => {
    (() => {
      // const sortData = products
      //   .slice()
      //   .sort((a: ProductCardType, b: ProductCardType) => {
      //     return a.price > b.price ? 1 : -1;
      //   });
      // props.setStartPriceValue(`${sortData[0].price}`);
      // props.setEndPriceValue(`${sortData[sortData.length - 1].price}`);
    })();
  }, [props.dataOfProducts]);

  //запись начального значения
  const handleChangeStartValue = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    // props.setStartPriceValue(event.target.value);
  };

  // запись конечного значения
  const handleChangeEndValue = (event: React.ChangeEvent<HTMLInputElement>) => {
    // props.setEndPriceValue(event.target.value);
  };

  //сортировка данных карточек
  const sortData = () => {
    // return props.dataOfProducts
    //   .slice()
    //   .sort((a: ProductCardType, b: ProductCardType) => {
    //     return a.price > b.price ? 1 : -1;
    //   });
  };

  //обнуление инпутов при фокусе на поле
  const handleFocusStartValue: React.FocusEventHandler<
    HTMLInputElement
  > = () => {
    // props.setStartPriceValue("");
  };
  const handleFocusEndValue: React.FocusEventHandler<HTMLInputElement> = () => {
    // props.setEndPriceValue("");
  };

  //отображение карточек при изменении начальной цены
  const handleBlurOnStartValue: React.FocusEventHandler<HTMLInputElement> = (
    event
  ) => {
    // if (+props.startPriceValue <= +props.endPriceValue) {
    //   let a = props.dataOfProducts.filter((item) => {
    //     return item.price >= +props.startPriceValue;
    //   });
    //   props.setDataForCards(a);
    // } else {
    //   props.setStartPriceValue(`${sortData()[0].price}`);
    // }
  };
  const handleBlurOnEndValue: React.FocusEventHandler<HTMLInputElement> = (
    event
  ) => {
    // if (+props.endPriceValue >= +props.startPriceValue) {
    //   let a = props.dataOfProducts.filter((item) => {
    //     return item.price <= +props.endPriceValue;
    //   });
    //   props.setDataForCards(a);
    // } else {
    //   props.setEndPriceValue(`${sortData()[sortData().length - 1].price}`);
    // }
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>ПОДБОР ПО ПАРАМЕТРАМ</h1>
      <div className={styles.price_div}>
        <p className={styles.price_title}>
          Цена <span>₸</span>
        </p>
        <div className={styles.price_inputs}>
          <input
            type="number"
            value={props.startPriceValue}
            onChange={handleChangeStartValue}
            onFocus={handleFocusStartValue}
            onBlur={handleBlurOnStartValue}
          />
          <p> - </p>
          <input
            type="number"
            value={props.endPriceValue}
            onChange={handleChangeEndValue}
            onFocus={handleFocusEndValue}
            onBlur={handleBlurOnEndValue}
          />
        </div>
      </div>
      <SelectOfManufacturer />
    </div>
  );
};
