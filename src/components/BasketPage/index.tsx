import React, { FC } from "react";
import { useSelector } from "react-redux";
import { selectCartProducts } from "../../Redux/basket-products/selectors";
import { Header } from "../Header";

import styles from "./index.module.scss";

export const BasketPage: FC = () => {
  const basketProducts = useSelector(selectCartProducts);
  const renderProducts = () => {
    return basketProducts.map((item) => {
      return (
        <div className={styles.product}>
          <div className={styles.img_div}>
            <img src={item.url} alt="" />
          </div>
          <div className={styles.product_data}>
            <p className={styles.volume_of_product}>{item.size_type}</p>
            <p className={styles.title_text}>
              {item.brand} {item.name}
            </p>
            <p className={styles.description}>{item.description}</p>
          </div>
          <div className={styles.count_div}>
            <button className={styles.count_button}>-</button>
            <p className={styles.count}>1</p>
            <button className={styles.count_button}>+</button>
          </div>
          <div className={styles.price}>
            <h6>48,76 ₸</h6>
          </div>
          <button className={styles.basket_button}></button>
        </div>
      );
    });
  };
  // basketProducts.forEach((item) => {
  //   console.log(typeof item);

  //   Object.values(item).forEach((key) => {
  //     return (
  //       <div className={styles.product_data}>
  //         <p className={styles.title_text}>{key?.brand}</p>
  //       </div>
  //     );
  //   });
  // });

  return (
    <div>
      <Header />
      <div className={styles.container}>
        <div className={styles.breadcrumbs}></div>
        <div className={styles.title_of_page}>
          <div className={styles.title}>
            <h1>Корзина</h1>
          </div>
        </div>
        <div className={styles.basket_products}>
          <div>{renderProducts()}</div>
        </div>
      </div>
    </div>
  );
};
