import { FC } from "react";
import styles from "./index.module.scss";
type Props = {
  isDeleteClick: boolean;
  setIsDeleteClick: React.Dispatch<React.SetStateAction<boolean>>;
};
export const DeleteButton: FC<Props> = (props) => {
  const handleClick = () => {
    props.setIsDeleteClick(!props.isDeleteClick);
  };
  return (
    <div className={styles.DeleteButton}>
      <button
        className={styles.delete_button}
        onClick={() => {
          handleClick();
        }}
      ></button>
    </div>
  );
};
