import { FC, useEffect, useState } from "react";
import styles from "./index.module.scss";
import logo from "../../../images/icons/logo_Sultan.png";
import cartIcon from "../../../images/icons/icons_basket.png";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectCartProducts } from "../../../Redux/basket-products/selectors";
import { Contacts } from "./Contacts";
import { Search } from "./Search";

export const MenuHeader: FC = () => {
  const navigate = useNavigate();
  const CartProducts = useSelector(selectCartProducts);
  const [price, setPrice] = useState(0);
  useEffect(() => {
    CartProducts.map((item) => {
      setPrice(price + item.price);
    });
  }, [CartProducts]);

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
        <div className={styles.div_basket} onClick={() => navigate("/basket")}>
          <div className={styles.basket}>
            <img src={cartIcon} alt="" />
            <span>1</span>
          </div>
          <div className={styles.info}>
            <p>Корзина</p>
            <h3>{price} ₸ </h3>
          </div>
        </div>
      </div>
    </div>
  );
};
