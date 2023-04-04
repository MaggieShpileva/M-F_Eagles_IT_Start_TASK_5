import React, { FC, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { allProductsReducer } from "../../Redux/all-product/reducer";
import { selectAllProducts } from "../../Redux/all-product/selectors";
import { filteredProducts } from "../../Redux/product-filter/actions";
import {
  brandFilter,
  manufactureFilter,
  selectIsFound,
  searchProducts,
  selectFilteredProducts,
} from "../../Redux/product-filter/selectors";
import { store } from "../../Redux/store";
import { TProductCard } from "../../types";
import { CartProduct } from "./CartProduct";
import styles from "./index.module.scss";

type Props = {};

export const CardsOfProducts: FC<Props> = () => {
  const put = useDispatch();
  const products = useSelector(selectAllProducts);
  const [arr, setArr] = useState(products);

  const search = useSelector(searchProducts);
  const isFoundProducts = useSelector(selectIsFound);
  const manufactureProducts = useSelector(manufactureFilter);
  const brandFilters = useSelector(brandFilter);
  const [countProductsOnPage, setCountProductsOnPage] = useState(0);

  const allFilteredProducts = useSelector(selectFilteredProducts);
  useEffect(() => {
    //условие при поиске продуктов
    if (search.length !== 0 && isFoundProducts === true) {
      put(filteredProducts(search));
    } else if (search.length === 0 && isFoundProducts === false) {
      put(filteredProducts([]));
    }
  }, [search, isFoundProducts]);

  useEffect(() => {
    let newArr: TProductCard[] = [];

    manufactureProducts.map((filter) => {
      products.forEach((product) => {
        if (filter === product.manufacturer) {
          newArr.push(product);
        }
      });
    });

    manufactureProducts.length
      ? put(filteredProducts(newArr))
      : put(filteredProducts(products));
  }, [manufactureProducts]);

  useEffect(() => {
    let newArr: TProductCard[] = [];
    brandFilters.map((filter) => {
      products.forEach((product) => {
        if (filter === product.brand) {
          newArr.push(product);
        }
      });
    });

    brandFilters.length
      ? put(filteredProducts(newArr))
      : put(filteredProducts(products));
  }, [brandFilters]);

  const renderButton = () => {
    let a = Math.ceil(allFilteredProducts.length / 10);
    const arr = [...Array(a)];

    return arr.map((item, index) => {
      return (
        <button
          key={`${index}`}
          onClick={() => handleClickNextProducts(index)}
          className={
            index * 12 == countProductsOnPage
              ? styles.button_active
              : styles.button
          }
        >
          {index + 1}
        </button>
      );
    });
  };

  const handleClickNextProducts = (index: number) => {
    setCountProductsOnPage(index * 12);
    window.scrollTo(0, 0);
  };

  const handleClickTurnLeft = () => {
    if (countProductsOnPage >= 12) {
      setCountProductsOnPage(countProductsOnPage - 12);
      window.scrollTo(0, 0);
    }
  };

  const handleClickTurnRight = () => {
    if (countProductsOnPage < Math.ceil(allFilteredProducts.length / 10)) {
      setCountProductsOnPage(countProductsOnPage + 12);
      window.scrollTo(0, 0);
    }
  };
  // const put(isFound(false));
  return (
    <div className={styles.container}>
      <div className={styles.render_cards}>
        {allFilteredProducts
          .slice(countProductsOnPage, countProductsOnPage + 12)
          .map((item, index) => {
            return (
              <CartProduct
                item={item}
                index={index}
                key={`${item.barcode} + ${index}`}
              />
            );
          })}
      </div>
      <div>
        {isFoundProducts === false && (
          <div className={styles.not_found_div}>
            <h2>ничего не найдено</h2>
            <button onClick={() => put(filteredProducts(products))}>
              Вернуться к основному каталогу
            </button>
          </div>
        )}
      </div>
      <div className={styles.navigate_buttons}>
        <button
          className={styles.turn_left}
          onClick={handleClickTurnLeft}
        ></button>
        {renderButton()}
        <button
          className={styles.turn_right}
          onClick={handleClickTurnRight}
        ></button>
      </div>
    </div>
  );
};
