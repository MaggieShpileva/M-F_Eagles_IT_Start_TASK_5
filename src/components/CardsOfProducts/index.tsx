import React, { FC } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { putProductInBasket } from "../../Redux/basket-products/actions";
import { actionSelectProduct } from "../../Redux/ProductPage/actions";
import { addProductReducer } from "../../Redux/ProductPage/reducer";
import { store } from "../../Redux/store";
import { ProductCard } from "../../types";
import styles from "./index.module.scss";
type Props = {
  dataOfProducts: any;
};
export const CardsOfProducts: FC<Props> = (dataOfProducts) => {
  const put = useDispatch();
  const navigate = useNavigate();
  const handleClick = (item: ProductCard) => {
    put(actionSelectProduct(item));
    navigate(`/product/${item.barcode}`);
  };

  const putProductToBasket = (item: ProductCard) => {
    put(putProductInBasket(item));
  };
  let renderCards: any = (data: any) => {
    return data.map((item: any, index: any) => {
      return (
        <div key={item.barcode + index} className={styles.card}>
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
            <p className={styles.price}>{item.price}</p>
            <button
              className={styles.basket}
              onClick={() => putProductToBasket(item)}
            >
              В КОРЗИНУ
            </button>
          </div>
        </div>
      );
    });
  };

  return (
    <div className={styles.container}>
      {renderCards(dataOfProducts.dataOfProducts)}
    </div>
  );
};
