import React, {
  DetailedHTMLProps,
  FC,
  HTMLAttributes,
  useEffect,
  useState,
} from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectAllProducts } from "../../../../Redux/all-product/selectors";
import { putManufactureFilter } from "../../../../Redux/product-filter/actions";
import styles from "./index.module.scss";

export const SelectManufacturer: FC = () => {
  const products = useSelector(selectAllProducts);
  const put = useDispatch();
  const [listManufactures, setListManufactures] = useState<string[]>([]);
  const [count, setCount] = useState(4);
  const [isOpen, setIsOpen] = useState(false);

  const resultArr = products.map((item: any) => {
    return item.manufacturer;
  });

  //сортировка производителей
  const res = Array.from(new Set(resultArr));
  //запись всех производителей
  const renderManufactures = () => {
    //отрисовка чекбоксов с производителями
    return res.slice(0, count).map((item: string, index) => {
      return (
        <div className={styles.checkbox_div} key={`${index}-${item}`}>
          <input
            type="checkbox"
            onChange={(event) => handleChangeManufacture(event, item)}
          />
          <p>{item}</p>
        </div>
      );
    });
  };
  const handleChangeManufacture = (
    event: React.ChangeEvent<HTMLInputElement>,
    item?: string
  ) => {
    let result = [];
    if (event.target.checked == true && item != undefined) {
      result.push(item);
      setListManufactures((prevArr) => [...prevArr, item]);
    } else {
      setListManufactures(
        listManufactures.filter((key) => {
          return key != item;
        })
      );
    }
  };

  useEffect(() => {
    const res = Array.from(new Set(listManufactures));
    put(putManufactureFilter(res));
  }, [listManufactures]);

  const handleClick = () => {
    if (isOpen) {
      setCount(4);
      setIsOpen(false);
    } else {
      setCount(res.length);
      setIsOpen(true);
    }

    // setCount(4);
  };
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Производитель</h1>
      <div className={styles.search}>
        <input type="text" placeholder="Поиск..." />
        <button className={styles.search_button}></button>
        <button className={styles.search_button_mobile}>Поиск</button>
      </div>
      <div className={styles.manufacture_div}>{renderManufactures()}</div>
      <button
        className={isOpen ? styles.show_all_active : styles.show_all_no_active}
        onClick={() => handleClick()}
      >
        Показать все
      </button>
    </div>
  );
};
