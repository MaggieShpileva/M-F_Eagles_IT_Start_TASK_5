import React, { FC, useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectAllProducts } from "../../../Redux/all-product/selectors";
import { filteredProducts } from "../../../Redux/product-filter/actions";
import {
  brandFilter,
  manufactureFilter,
  selectFilteredProducts,
} from "../../../Redux/product-filter/selectors";
import { TProductCard } from "../../../types/index";
import styles from "./index.module.scss";

type Props = {};

export const SortProduct: FC<Props> = (props) => {
  const [sortType, setSortType] = useState<string>("");
  const products = useSelector(selectAllProducts);
  const allFilteredProducts = useSelector(selectFilteredProducts);
  const manufactureProducts = useSelector(manufactureFilter);
  const brandFilters = useSelector(brandFilter);
  const put = useDispatch();

  // вычисление начальной и конечной цены
  let newProducts: TProductCard[] = [];
  const handleChangeSort = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSortType(event.target.value);
  };
  //сортирока товаров
  useEffect(() => {
    if (sortType == "price increase") {
      newProducts = allFilteredProducts.slice().sort((a, b) => {
        return a.price > b.price ? 1 : -1;
      });
    } else if (sortType == "price reduction") {
      newProducts = allFilteredProducts.slice().sort((a, b) => {
        return a.price < b.price ? 1 : -1;
      });
    } else if (sortType == "sort to name") {
      newProducts = allFilteredProducts.slice().sort((a, b) => {
        return a.brand > b.brand ? 1 : -1;
      });
    } else if (sortType == "sort by popularity") {
      newProducts = products;
    }

    put(filteredProducts(newProducts));
  }, [sortType]);

  useEffect(() => {
    setSortType("sort by popularity");
  }, [manufactureProducts, brandFilters]);

  return (
    <div className={styles.container}>
      <div className={styles.sort}>
        <p className={styles.sort_title}>Сортировка:</p>
        <select value={sortType} name="" id="" onChange={handleChangeSort}>
          <option value="sort by popularity">По популярности</option>
          <option value="sort to name">Названию</option>
          <option value="price increase">Цена по возрастанию</option>
          <option value="price reduction">Цена по убыванию</option>
        </select>
      </div>
    </div>
  );
};
