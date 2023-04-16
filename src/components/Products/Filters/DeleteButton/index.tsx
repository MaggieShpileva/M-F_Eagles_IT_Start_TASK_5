import { FC } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { selectAllProducts } from "../../../../Redux/all-product/selectors";
import {
  filteredProducts,
  putBrandFilter,
  putManufactureFilter,
} from "../../../../Redux/product-filter/actions";
import { store } from "../../../../Redux/store";
import styles from "./index.module.scss";
type Props = {
  isDeleteClick: boolean;
  setIsDeleteClick: React.Dispatch<React.SetStateAction<boolean>>;
};
export const DeleteButton: FC<Props> = (props) => {
  const put = useDispatch();
  const products = useSelector(selectAllProducts);
  const handleClick = () => {
    props.setIsDeleteClick(!props.isDeleteClick);
    put(filteredProducts(products));
    put(putBrandFilter([]));
    put(putManufactureFilter([]));
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
