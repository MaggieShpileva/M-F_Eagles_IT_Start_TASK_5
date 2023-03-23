import React, { FC } from "react";
import styles from "./index.module.scss";
type Props = {
  dataOfProducts: any;
};
export const CardsOfProducts: FC<Props> = (dataOfProducts) => {
  // console.log(dataOfProducts);
  let renderCards: any = (data: any) => {
    return data.map((item: any, index: any) => {
      // console.log(item);
      return (
        <div key={item.barcode + index} className={styles.card}>
          <img src={item.url} alt="" />
          <p className={styles.volume_of_product}>{item.size_type}</p>
          <p className={styles.title_text}>
            {" "}
            <span>{item.brand}</span> {item.name}
          </p>
          <div className={styles.description}>
            <p className={styles.subtitle}>Штрихкод:</p>
            <p className={styles.value}>{item.barcode}</p>
          </div>

          <div className={styles.description}>
            <p className={styles.subtitle}>Производитель:</p>
            <p className={styles.value}>{item.manufacturer}</p>
          </div>
          <div className={styles.description}>
            <p className={styles.subtitle}>Бренд:</p>
            <p className={styles.value}>{item.brand}</p>
          </div>
          <div className={styles.price_and_basket}>
            <p className={styles.price}>{item.price}</p>
            <button className={styles.basket}>В КОРЗИНУ</button>
          </div>
        </div>
      );
    });
  };
  // const a = JSON.parse(test);
  // console.log(a);
  return (
    <div className={styles.container}>
      {renderCards(dataOfProducts.dataOfProducts)}
    </div>
  );
};
