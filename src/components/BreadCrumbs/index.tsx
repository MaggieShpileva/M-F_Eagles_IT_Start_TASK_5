import { useLocation } from "react-router-dom";
import styles from "./index.module.scss";
export const BreadCrumbs = () => {
  let location = useLocation()
    .pathname.split("/")
    .filter((item) => item != "");

  let copyLocation = location.map((item) => {
    if (item == "catalog") {
      item = "Косметика и гигиена";
    } else if (item == "product") {
      item = "Косметика и гигиена";
    } else if (item == "cart") {
      item = "Корзина";
    } else if (item == "hand_care") {
      item = "Уход за руками";
    } else if (item == "body_care") {
      item = "Уход за телом";
    } else if (item == "face_care") {
      item = "Уход за лицом";
    } else if (item == "dishwashing_liquid") {
      item = "Средства для мытья";
    } else if (item == "washing_powder") {
      item = "Стиральные порошки";
    } else if (item == "Shampoo") {
      item = "Шампуни";
    } else if (item == "care_behind_the_legs") {
      item = "Уход за ногами";
    }
    return item;
  });
  const renderBreadCrumbs = () => {
    return copyLocation.map((item, index) => {
      return <p key={`${item}-${index}`}>{item}</p>;
    });
  };
  return (
    <div className={styles.container}>
      <div className={styles.breadcrumbs}>
        <p>Главная</p>
        <div>{renderBreadCrumbs()}</div>
      </div>
    </div>
  );
};
