import React, { FC, useEffect, useState } from "react";
import { Header } from "../Header";
import styles from "./index.module.scss";
import icon1 from "../../images/icons/box-for-product.svg";
import icon2 from "../../images/icons/bottle-for-product.svg";
import { useSelector } from "react-redux";
import { Footer } from "../Footer";
import { selectProduct } from "../../Redux/ProductPage/selectors";
import { store } from "../../Redux/store";
import { BreadCrumbs } from "../BreadCrumbs";
import { selectCount } from "../../Redux/cart-products/selectors";
import { countProductsCart } from "../../Redux/cart-products/actions";
import { useDispatch } from "react-redux";
import { InfoProduct } from "./InfoProduct";

export const ProductPage: FC = () => {
  const [countProduct, setCountProduct] = useState(1);
  const put = useDispatch();
  const [click, setClick] = useState(2);
  //все продукты в корзине
  const products = useSelector(selectCount);

  const product = useSelector(selectProduct);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleClickMinus = () => {
    if (countProduct > 1) {
      setCountProduct(countProduct - 1);
    }
  };
  const handleClickPlus = () => {
    if (countProduct <= product.count_product) {
      setCountProduct(countProduct + 1);
    }
  };

  const addProductToCart = () => {
    if (countProduct > 1) {
      put(countProductsCart(product.barcode, product, countProduct));
    } else {
      put(countProductsCart(product.barcode, product, 1));
    }
  };
  return (
    <>
      <Header />
      <BreadCrumbs />
      <div className={styles.container}>
        <div className={styles.breadcrumbs}></div>

        <div className={styles.product}>
          <div className={styles.image_div}>
            <img src={product.url} alt="" />
          </div>
          <div className={styles.info_product}>
            {product.count_product > 0 ? (
              <p className={styles.available}>В наличии</p>
            ) : (
              <p className={styles.not_available}>Нет в наличии</p>
            )}

            <div className={styles.title}>
              <h6 className={styles.manufacture_name}>{product.brand}</h6>
              <h6 className={styles.product_name}>{product.name}</h6>
            </div>
            <div className={styles.size_type}>
              <img src={icon1} alt="" />
              <p>90 г</p>
            </div>
            <div className={styles.price_div}>
              <h6 className={styles.price}>
                {product.price} <span>₸</span>
              </h6>
              <div className={styles.count_of_product}>
                <button onClick={handleClickMinus}>-</button>
                <p>{countProduct}</p>
                <button onClick={handleClickPlus}>+</button>
              </div>
              <button className={styles.basket} onClick={addProductToCart}>
                В корзину
              </button>
            </div>

            <InfoProduct product={product} />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
