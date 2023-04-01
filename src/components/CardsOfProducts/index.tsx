import React, { FC, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { selectAllProducts } from "../../Redux/all-product/selectors";
import { putProductInBasket } from "../../Redux/basket-products/actions";
import { notFountProduct } from "../../Redux/product-filter/actions";
import { notFound, searchProducts } from "../../Redux/product-filter/selectors";
import { actionSelectProduct } from "../../Redux/ProductPage/actions";
import { ProductCardType } from "../../types";
import styles from "./index.module.scss";
type Props = {};
export const CardsOfProducts: FC<Props> = () => {
  const put = useDispatch();
  const navigate = useNavigate();
  const products = useSelector(selectAllProducts);
  const [arr, setArr] = useState(products);
  const handleClick = (item: ProductCardType) => {
    put(actionSelectProduct(item));
    navigate(`/product/${item.barcode}`);
  };

  const search = useSelector(searchProducts);
  const notFountProducts = useSelector(notFound);
  console.log(notFountProducts);
  useEffect(() => {
    if (search.length != 0 && notFountProducts === false) {
      setArr(search);
    } else if (search.length == 0 && notFountProducts === true) {
      setArr([]);
    }
  }, [search, notFountProducts]);

  const putProductToBasket = (item: ProductCardType) => {};
  let renderCards: any = (data: any) => {
    console.log(arr);
    return arr.map((item: any, index: any) => {
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
              onClick={() => put(putProductInBasket(item))}
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
      <div className={styles.render_cards}>{renderCards()}</div>
      <div>{notFountProducts == true && <h2>ничего не найдено</h2>}</div>
    </div>
  );
};
