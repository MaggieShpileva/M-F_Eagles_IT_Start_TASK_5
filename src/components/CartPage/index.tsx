import React, { FC, useEffect } from "react";
import { useSelector } from "react-redux";
import {
  selectCartProducts,
  selectCount,
} from "../../Redux/cart-products/selectors";
import { Cart } from "../Cart";
import { BreadCrumbs } from "../BreadCrumbs";
import { Footer } from "../Footer";
import { Header } from "../Header";
import { PageTitle } from "../PageTitle";

import styles from "./index.module.scss";
import { TProductCard } from "../../types";

export const CartPage: FC = () => {
  const selectProducts = useSelector(selectCount);
  let arr: any = [];

  const renderProductCart: any = () => {
    if (Object.keys(selectProducts).length != 0) {
      for (let item in selectProducts) {
        arr.push(Object.values(selectProducts[item]));
      }
      return arr.map((item: any) => {
        return (
          <Cart
            cardBasket={item[0]}
            count={item[1]}
            key={`${item[0].barcode}`}
          />
        );
      });
    } else {
      return (
        <div className={styles.empty_cart}>
          <h2>Ваша корзина пуста</h2>
        </div>
      );
    }
  };

  return (
    <div>
      <Header />
      <BreadCrumbs />
      <div className={styles.container}>
        <PageTitle title={"Корзина"} />
        <div className={styles.cart_products}>{renderProductCart()}</div>
      </div>
      <Footer />
    </div>
  );
};
