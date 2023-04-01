import { FC } from "react";
import styles from "./index.module.scss";
import ManagerFoto from "../../../../images/icons/header_icon_women.png";

export const Contacts: FC = () => {
  return (
    <div className={styles.contacts}>
      <div className={styles.info}>
        <h3>+7 (777) 490-00-91</h3>
        <p>время работы: 9:00-20:00</p>
        <a href="">Заказать звонок</a>
      </div>
      <img src={ManagerFoto} alt="" />
    </div>
  );
};
