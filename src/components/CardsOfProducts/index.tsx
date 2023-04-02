import React, { FC, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { allProductsReducer } from "../../Redux/all-product/reducer";
import { selectAllProducts } from "../../Redux/all-product/selectors";
import { filteredProducts } from "../../Redux/product-filter/actions";
import {
  brandFilter,
  manufactureFilter,
  selectNotFound,
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
  const notFoundProducts = useSelector(selectNotFound);
  const manufactureProducts = useSelector(manufactureFilter);
  const brandFilters = useSelector(brandFilter);

  const allFilteredProducts = useSelector(selectFilteredProducts);
  useEffect(() => {
    //условие при поиске продуктов
    if (search.length !== 0 && notFoundProducts === false) {
      put(filteredProducts(search));
    } else if (search.length === 0 && notFoundProducts === true) {
      put(filteredProducts([]));
    }
  }, [search, notFoundProducts]);

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

  return (
    <div className={styles.container}>
      <div className={styles.render_cards}>
        {allFilteredProducts.map((item, index) => {
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
        {notFoundProducts === true && (
          <div className={styles.not_found_div}>
            <h2>ничего не найдено</h2>
            <button onClick={() => put(filteredProducts(products))}>
              Вернуться к основному каталогу
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
