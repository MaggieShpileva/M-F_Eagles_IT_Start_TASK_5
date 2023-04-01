import { FC } from "react";
import { ProductCardType } from "../../types";
import styles from "./index.module.scss";
type Props = {
  cardBasket: ProductCardType;
};
export const Cart: FC<Props> = (props) => {
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
          <button className={styles.count_button}>-</button>
          <p className={styles.count}>1</p>
          <button className={styles.count_button}>+</button>
        </div>
        <div className={styles.price}>
          <h6>{props.cardBasket.price} ₸</h6>
        </div>
        <button className={styles.basket_button}></button>
      </div>
    </div>
  );
};
