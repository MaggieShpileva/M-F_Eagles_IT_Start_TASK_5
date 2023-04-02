import { FC, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { filteredProducts } from "../../../../Redux/product-filter/actions";
import { selectFilteredProducts } from "../../../../Redux/product-filter/selectors";
import { TProductCard } from "../../../../types";
import styles from "./index.module.scss";

export const Price: FC = () => {
  const allFilteredProducts = useSelector(selectFilteredProducts);
  const [startPriceValue, setStartPriceValue] = useState<number>(0);
  const [endPriceValue, setEndPriceValue] = useState<number>(0);
  const put = useDispatch();
  const [updateArr, setUpdateArr] =
    useState<TProductCard[]>(allFilteredProducts);

  useEffect(() => {
    (() => {
      let sortData = allFilteredProducts.slice().sort((a, b) => {
        return a.price > b.price ? 1 : -1;
      });

      if (allFilteredProducts.length) {
        setStartPriceValue(sortData[0].price);
        setEndPriceValue(sortData[sortData.length - 1].price);
      } else {
        setStartPriceValue(0);
        setEndPriceValue(0);
      }
      setUpdateArr(sortData);
    })();
  }, [allFilteredProducts]);

  const handleChangeStartValue = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setStartPriceValue(+event.target.value);
  };

  // const handleBlurOnStartValue = () => {
  //   let b = updateArr.filter((item) => {
  //     return item.price > startPriceValue;
  //   });
  //   put(filteredProducts(b));
  // };

  const handleChangeEndValue = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {};

  //обнуление инпутов при фокусе на поле
  const handleFocusStartValue: React.FocusEventHandler<HTMLInputElement> = (
    event
  ) => {
    event.target.value = "";
    //  props.setStartPriceValue("");
  };

  const handleFocusEndValue: React.FocusEventHandler<HTMLInputElement> = (
    event
  ) => {
    event.target.value = "";
    // props.setEndPriceValue("");
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
          // onBlur={handleBlurOnStartValue}
        />
        <p> - </p>
        <input
          type="number"
          value={endPriceValue}
          onChange={handleChangeEndValue}
          onFocus={handleFocusEndValue}
          // onBlur={handleBlurOnEndValue}
        />
      </div>
    </div>
  );
};
