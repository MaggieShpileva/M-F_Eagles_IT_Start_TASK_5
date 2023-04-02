import { FC, useEffect, useState } from "react";
import styles from "./index.module.scss";
import logo from "../../../images/icons/logo_Sultan.png";
import cartIcon from "../../../images/icons/icons_basket.png";
import { useLocation, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import {
  selectCartProducts,
  selectCount,
} from "../../../Redux/cart-products/selectors";
import { Contacts } from "./Contacts";
import { Search } from "./Search";
import { store } from "../../../Redux/store";
import { useDispatch } from "react-redux";

export const MenuHeader: FC = () => {
  const navigate = useNavigate();
  const countProducts = useSelector(selectCount);
  console.log(countProducts);
  let count = 0;
  let total = 0;
  for (let item in countProducts) {
    count += countProducts[item].count;
    total += countProducts[item].product.price;
  }
  return (
    <div className={styles.main_row_menu}>
      <div className={styles.container}>
        <div className={styles.burger_menu_mobile}> </div>
        <div className={styles.logo} onClick={() => navigate("/")}>
          <img src={logo} alt="" />
        </div>
        <div className={styles.catalog}>
          <button
            className={styles.catalog_button}
            onClick={() => navigate("/catalog")}
          >
            Каталог
          </button>
        </div>

        <Search />
        <Contacts />
        <div className={styles.price_list}>
          <button className={styles.price_list_button}>Прайс-лист</button>
        </div>
        <div className={styles.div_cart} onClick={() => navigate("/cart")}>
          <div className={styles.cart}>
            <img src={cartIcon} alt="" />
            <span>{count}</span>
          </div>
          <div className={styles.info}>
            <p>Корзина</p>
            <h3>{total} ₸ </h3>
          </div>
        </div>
      </div>
    </div>
  );
};
