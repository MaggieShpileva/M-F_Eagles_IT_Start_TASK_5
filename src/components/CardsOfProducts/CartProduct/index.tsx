import { FC, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  countProductsCart,
  putProductInBasket,
} from "../../../Redux/cart-products/actions";
import { actionSelectProduct } from "../../../Redux/ProductPage/actions";
import { store } from "../../../Redux/store";
import { TProductCard } from "../../../types";
import styles from "./index.module.scss";
type Props = {
  item: TProductCard;
  index: number;
};
export const CartProduct: FC<Props> = ({ item, index }) => {
  const put = useDispatch();
  const navigate = useNavigate();
  const [count, setCount] = useState(1);
  const handleClick = (item: TProductCard) => {
    put(actionSelectProduct(item));
    navigate(`/product/${item.filter[0]}/${item.barcode}`);
  };
  const handleClickCart = () => {
    setCount(count + 1);
    put(countProductsCart(item.barcode, item, count));
    put(putProductInBasket(item));
  };

  return (
    <div className={styles.card}>
      <img src={item.url} alt="" />
      <p className={styles.volume_of_product}>{item.size_type}</p>
      <p className={styles.title_text} onClick={() => handleClick(item)}>
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
        <p className={styles.price}>{item.price} ₸</p>
        <button className={styles.basket} onClick={() => handleClickCart()}>
          В КОРЗИНУ
        </button>
      </div>
    </div>
  );
};
