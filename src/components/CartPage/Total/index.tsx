import { FC } from "react";
import styles from "./index.module.scss";
type Props = {
  total: number;
  isModal: boolean;
  setIsModal: React.Dispatch<React.SetStateAction<boolean>>;
};
export const Total: FC<Props> = (props) => {
  return (
    <div>
      {props.total !== 0 && (
        <div className={styles.container}>
          <button onClick={() => props.setIsModal(true)}>Оформить заказ</button>
          <h1>{props.total} ₸</h1>
        </div>
      )}
    </div>
  );
};
