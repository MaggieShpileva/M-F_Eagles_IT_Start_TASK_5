import React, { FC, useEffect, useState } from "react";
import { Header } from "../Header";
import styles from "./index.module.scss";
import icon1 from "../../images/icons/box-for-product.svg";
import icon2 from "../../images/icons/bottle-for-product.svg";
import { useSelector } from "react-redux";
import { Footer } from "../Footer";
import { selectProduct } from "../../Redux/ProductPage/selectors";
import { store } from "../../Redux/store";

export const ProductPage: FC = () => {
  const [activeDescription, setActiveDescription] = useState(true);
  const [activeCharacteristics, setActiveCharacteristics] = useState(true);
  const [countProduct, setCountProduct] = useState(1);

  const product = useSelector(selectProduct);
  console.log(product.barcode);
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

  return (
    <>
      <Header />
      
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
              <button className={styles.basket}>В корзину</button>
            </div>
            <div className={styles.buttons}>
              <button className={styles.share}></button>
              <p className={styles.delivery_text}>
                При покупке от <span> 10 000 ₸</span> бесплатная доставка по
                Кокчетаву и области
              </p>
              <button className={styles.price_list}>Прайс-лист</button>
            </div>
            <div className={styles.parameters}>
              <div className={styles.parameter}>
                <p className={styles.subtitle}>Производитель:</p>
                <p className={styles.value}>{product.manufacturer}</p>
              </div>
              <div className={styles.parameter}>
                <p className={styles.subtitle}>Бренд:</p>
                <p className={styles.value}>{product.brand}</p>
              </div>
              <div className={styles.parameter}>
                <p className={styles.subtitle}>Артикул:</p>
                <p className={styles.value}>{product.barcode}</p>
              </div>
              <div className={styles.parameter}>
                <p className={styles.subtitle}>Штрихкод:</p>
                <p className={styles.value}>{product.barcode}</p>
              </div>
            </div>
            <div className={styles.description}>
              <div className={styles.title}>
                <h5>Описание</h5>
                <button
                  className={
                    activeDescription
                      ? styles.button_active
                      : styles.button_no_active
                  }
                  onClick={() => {
                    setActiveDescription(!activeDescription);
                  }}
                ></button>
              </div>
              <p
                className={
                  activeDescription
                    ? styles.description_text
                    : styles.description_text_none
                }
              >
                {product.description}
              </p>
            </div>
            <div className={styles.characteristics_div}>
              <div className={styles.title}>
                <h5>Характеристики</h5>
                <button
                  className={
                    activeCharacteristics
                      ? styles.button_active
                      : styles.button_no_active
                  }
                  onClick={() => {
                    setActiveCharacteristics(!activeCharacteristics);
                  }}
                ></button>
              </div>
              <div
                className={
                  activeCharacteristics
                    ? styles.characteristics
                    : styles.characteristics_none
                }
              >
                <div className={styles.parameter}>
                  <p className={styles.subtitle}>Назначение:</p>
                  <p className={styles.value}>{product.brand}</p>
                </div>
                <div className={styles.parameter}>
                  <p className={styles.subtitle}>Тип:</p>
                  <p className={styles.value}>{product.brand}</p>
                </div>
                <div className={styles.parameter}>
                  <p className={styles.subtitle}>Производитель:</p>
                  <p className={styles.value}>{product.manufacturer}</p>
                </div>
                <div className={styles.parameter}>
                  <p className={styles.subtitle}>Бренд:</p>
                  <p className={styles.value}>{product.brand}</p>
                </div>
                <div className={styles.parameter}>
                  <p className={styles.subtitle}>Артикул:</p>
                  <p className={styles.value}>{product.barcode}</p>
                </div>
                <div className={styles.parameter}>
                  <p className={styles.subtitle}>Штрихкод:</p>
                  <p className={styles.value}>{product.barcode}</p>
                </div>
                <div className={styles.parameter}>
                  <p className={styles.subtitle}>Вес:</p>
                  <p className={styles.value}>{product.size_type}</p>
                </div>
                <div className={styles.parameter}>
                  <p className={styles.subtitle}>Объем:</p>
                  <p className={styles.value}>{product.size_type}</p>
                </div>
                <div className={styles.parameter}>
                  <p className={styles.subtitle}>Кол-во в коробке:</p>
                  <p className={styles.value}>{product.size_type}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
