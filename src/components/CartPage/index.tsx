import React, { FC } from "react";
import { useSelector } from "react-redux";
import { selectCartProducts } from "../../Redux/cart-products/selectors";
import { Cart } from "../Cart";
import { BreadCrumbs } from "../BreadCrumbs";
import { Footer } from "../Footer";
import { Header } from "../Header";
import { PageTitle } from "../PageTitle";

import styles from "./index.module.scss";

export const CartPage: FC = () => {
  const CartProducts = useSelector(selectCartProducts);

  return (
    <div>
      <Header />
      <BreadCrumbs />
      <div className={styles.container}>
        <PageTitle title={"Корзина"} />
        <div className={styles.cart_products}>
          {CartProducts.length != 0 ? (
            CartProducts.map((item, index) => {
              return (
                <Cart cardBasket={item} key={`${item.barcode}/${index}`} />
              );
            })
          ) : (
            <div className={styles.empty_cart}>
              <h2>Ваша корзина пуста</h2>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};
