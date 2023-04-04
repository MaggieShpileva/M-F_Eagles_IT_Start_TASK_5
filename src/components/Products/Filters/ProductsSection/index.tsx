import { FC, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { selectAllProducts } from "../../../../Redux/all-product/selectors";
import { filteredProducts } from "../../../../Redux/product-filter/actions";
import styles from "./index.module.scss";

export const ProductsSection: FC = () => {
  const products = useSelector(selectAllProducts);
  const [arrSections, setArrSections] = useState<string[]>([]);
  const put = useDispatch();
  useEffect(() => {
    let arr = products.reduce<string[]>((acc, item) => {
      if (item.filter.length > 1) {
        item.filter.map((i) => {
          acc.push(i);
        });
      } else {
        acc.push(item.filter.toString());
      }
      return acc;
    }, []);
    //массив по значениям
    let res = Array.from(new Set(arr));
    setArrSections(res);
  }, []);

  const renameItem = (item: string) => {
    switch (true) {
      case item === "body_care":
        return (item = "Уход за телом");
      case item === "hand_care":
        return (item = "Уход за руками");
      case item === "face_care":
        return (item = "Уход за лицом");
      case item === "dishwashing_liquid":
        return (item = "Жидкость для мытья посуды");
      case item === "washing_powder":
        return (item = "Стиральный порошок");
      case item === "Shampoo":
        return (item = "Шампунь");
      case item === "care_behind_the_legs":
        return (item = "Уход за ногами");
      default:
        return item;
    }
  };
  const handleClick = (key: string) => {
    let arr = products.filter((item) => {
      if (item.filter.includes(key)) {
        return item;
      }
    });
    put(filteredProducts(arr));
  };
  return (
    <div className={styles.container}>
      {arrSections.map((item, index) => {
        let title = renameItem(item);
        return (
          <p key={`${item}- ${index}`} onClick={() => handleClick(item)}>
            {title}
          </p>
        );
      })}
    </div>
  );
};
