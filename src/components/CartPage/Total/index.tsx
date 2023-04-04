import { FC } from "react";
import { useDispatch } from "react-redux";
import { clearStore } from "../../../Redux/cart-products/actions";
import styles from "./index.module.scss";
type Props = {
  total: number;
  isModal: boolean;
  setIsModal: React.Dispatch<React.SetStateAction<boolean>>;
};
export const Total: FC<Props> = (props) => {
  const put = useDispatch<any>();
  const handleClick = () => {
    props.setIsModal(true);
    put(clearStore);
  };
  return (
    <div className={styles.total_div}>
      {props.total !== 0 && (
        <div className={styles.container}>
          <button onClick={() => handleClick()}>Оформить заказ</button>
          <h1>{props.total} ₸</h1>
        </div>
      )}
    </div>
  );
};
