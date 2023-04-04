import { FC, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { countProductsCart } from "../../Redux/cart-products/actions";
import {
  selectCartProducts,
  selectCount,
} from "../../Redux/cart-products/selectors";
import { TProductCard } from "../../types";
import styles from "./index.module.scss";
type Props = {
  cardBasket: TProductCard;
  count: number;
};
export const Cart: FC<Props> = (props) => {
  const selectProducts = useSelector(selectCount);
  const put = useDispatch();
  const [count, setCount] = useState(1);
  const productsCart = useSelector(selectCount);

  useEffect(() => {
    setCount(productsCart[props.cardBasket.barcode].count);
  }, []);
  const handleClickMinus = () => {
    if (count > 1) {
      setCount(count - 1);
      put(countProductsCart(props.cardBasket.barcode, props.cardBasket, -1));
    }
    count > 1 ? setCount(count - 1) : setCount(1);
  };
  const handleClickPlus = () => {
    put(countProductsCart(props.cardBasket.barcode, props.cardBasket, 1));
  };

  useEffect(() => {
    // put(countProductsCart(props.cardBasket.barcode, props.cardBasket, count));
    console.log(count);
  }, [count]);
  return (
    <div>
      <div className={styles.product}>
        <div className={styles.img_div}>
          <img src={props.cardBasket.url} alt="" />
        </div>
        <div className={styles.product_data}>
          <p className={styles.volume_of_product}>
            {props.cardBasket.size_type}
          </p>
          <p className={styles.title_text}>
            {props.cardBasket.brand} {props.cardBasket.name}
          </p>
          <p className={styles.description}>{props.cardBasket.description}</p>
        </div>
        <div className={styles.count_div}>
          <button
            className={styles.count_button}
            onClick={() => {
              handleClickMinus();
            }}
          >
            -
          </button>
          <p className={styles.count}>{count}</p>
          <button
            className={styles.count_button}
            onClick={() => handleClickPlus()}
          >
            +
          </button>
        </div>
        <div className={styles.price}>
          <h6>{props.cardBasket.price} ₸</h6>
        </div>
        <button className={styles.basket_button}></button>
      </div>
    </div>
  );
};
