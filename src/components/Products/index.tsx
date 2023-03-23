import React, { FC, MouseEventHandler, useState } from "react";
import styles from "./index.module.scss";
import { data } from "../../data/JSON";
import { CardsOfProducts } from "../CardsOfProducts";
export const Products: FC = () => {
  let dataOfProducts = JSON.parse(data);

  const [dataForCards, setDataForCards] = useState(dataOfProducts.products);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    let a = dataOfProducts.products.filter((item: any) => {
      return item.filter.includes(event.currentTarget.name);
    });
    setDataForCards(a);
  };

  return (
    <div className={styles.container}>
      <div className={styles.breadcrumbs}></div>
      <div className={styles.title_of_page}>
        <div className={styles.title}></div>
        <div className={styles.sort}></div>
      </div>
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
      <CardsOfProducts dataOfProducts={dataForCards} />
    </div>
  );
};
