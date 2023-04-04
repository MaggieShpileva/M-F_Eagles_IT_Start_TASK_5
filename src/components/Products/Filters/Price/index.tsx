import { FC, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { selectAllProducts } from "../../../../Redux/all-product/selectors";
import { filteredProducts } from "../../../../Redux/product-filter/actions";
import { selectFilteredProducts } from "../../../../Redux/product-filter/selectors";
import { store } from "../../../../Redux/store";
import { TProductCard } from "../../../../types";
import styles from "./index.module.scss";

export const Price: FC = () => {
  const products = useSelector(selectAllProducts);
  const [startPriceValue, setStartPriceValue] = useState<number>(0);
  const [endPriceValue, setEndPriceValue] = useState<number>(0);
  const put = useDispatch();
  const [updateArr, setUpdateArr] = useState<TProductCard[]>(products);

  const sortProducts = () => {
    return products.slice().sort((a, b) => {
      return a.price > b.price ? 1 : -1;
    });
  };
  useEffect(() => {
    (() => {
      // let sortData = products.slice().sort((a, b) => {
      //   return a.price > b.price ? 1 : -1;
      // });
      setStartPriceValue(sortProducts()[0].price);
      setEndPriceValue(sortProducts()[sortProducts().length - 1].price);

      // setUpdateArr(sortData);
    })();
  }, []);

  const handleBlurOnStartValue = () => {
    let b = sortProducts().filter((item) => {
      return item.price >= startPriceValue && item.price <= endPriceValue;
    });
    put(filteredProducts(b));
  };

  const handleBlurOnEndValue = () => {
    let b = sortProducts().filter((item) => {
      return startPriceValue <= item.price && item.price <= endPriceValue;
    });
    put(filteredProducts(b));
  };

  //запись значений инпутов
  const handleChangeEndValue = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEndPriceValue(+event.target.value);
  };

  const handleChangeStartValue = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setStartPriceValue(+event.target.value);
  };
  //обнуление инпутов при фокусе на поле
  const handleFocusStartValue: React.FocusEventHandler<HTMLInputElement> = (
    event
  ) => {
    event.target.value = "";
  };

  const handleFocusEndValue: React.FocusEventHandler<HTMLInputElement> = (
    event
  ) => {
    event.target.value = "";
  };

  return (
    <div className={styles.price_div}>
      <p className={styles.price_title}>
        Цена <span>₸</span>
      </p>
      <div className={styles.price_inputs}>
        <input
          type="number"
          value={startPriceValue}
          onChange={handleChangeStartValue}
          onFocus={handleFocusStartValue}
          onBlur={handleBlurOnStartValue}
        />
        <p> - </p>
        <input
          type="number"
          value={endPriceValue}
          onChange={handleChangeEndValue}
          onFocus={handleFocusEndValue}
          onBlur={handleBlurOnEndValue}
        />
      </div>
    </div>
  );
};
