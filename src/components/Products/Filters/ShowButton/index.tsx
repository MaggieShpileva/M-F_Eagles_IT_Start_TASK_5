import { FC } from "react";
import styles from "./index.module.scss";

export const ShowButton: FC = () => {
  return (
    <div className={styles.ShowButton}>
      <button className={styles.show_button}>Показать</button>
    </div>
  );
};
