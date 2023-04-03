import { FC } from "react";
import styles from "./index.module.scss";
import icon from "../../../images/icons/icon-for-modal.svg";

type Props = {
  isModal: boolean;
  setIsModal: React.Dispatch<React.SetStateAction<boolean>>;
};
export const ModalSuccessOrder: FC<Props> = (props) => {
  return !props.isModal ? null : (
    <div className={styles.modal}>
      <div className={styles.modal_window}>
        <button
          className={styles.close}
          onClick={() => props.setIsModal(false)}
        ></button>
        <img src={icon} alt="" />
        <h1>Спасибо за заказ</h1>
        <p>Наш менеджер свяжется с вами в ближайшее время</p>
      </div>
    </div>
  );
};
