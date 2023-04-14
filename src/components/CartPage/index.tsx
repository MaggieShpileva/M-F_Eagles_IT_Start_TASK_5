import React, { FC, useEffect, useState } from "react";
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
import { Total } from "./Total";
import { ModalSuccessOrder } from "./ModalSuccessOrder";

export const CartPage: FC = () => {
  const selectProducts = useSelector(selectCount);
  const [isModal, setIsModal] = useState(false);
  let arr: any = [];
  let total = 0;
  const renderProductCart: any = () => {
    if (Object.keys(selectProducts).length != 0) {
      for (let item in selectProducts) {
        arr.push(Object.values(selectProducts[item]));
        total += selectProducts[item].product.price;
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
    <div data-testid="cart-page">
      <Header />
      <BreadCrumbs />
      <PageTitle title={"Корзина"} />
      <div className={styles.cart}>
        <div className={styles.container}>
          <div className={styles.cart_products}>{renderProductCart()}</div>
        </div>
      </div>
      <Total total={total} isModal={isModal} setIsModal={setIsModal} />
      <Footer />
      <ModalSuccessOrder isModal={isModal} setIsModal={setIsModal} />
    </div>
  );
};
