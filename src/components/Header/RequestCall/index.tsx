import React, { FC } from "react";
import styles from "./index.module.scss";

export const RequestCall: FC = () => {
  return (
    <div className={styles.request_a_call}>
      <button className={styles.call_button}></button>
      <a href="">Заказать звонок</a>
    </div>
  );
};
