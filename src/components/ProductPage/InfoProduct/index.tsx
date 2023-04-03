import { FC, useState } from "react";
import { TProductCard } from "../../../types";
import styles from "./index.module.scss";
type Props = {
  product: TProductCard;
};
export const InfoProduct: FC<Props> = ({ product }) => {
  console.log(product);
  const [activeDescription, setActiveDescription] = useState(true);
  const [activeCharacteristics, setActiveCharacteristics] = useState(true);

  return (
    <div>
      <div className={styles.buttons}>
        <button className={styles.share}></button>
        <p className={styles.delivery_text}>
          При покупке от <span> 10 000 ₸</span> бесплатная доставка по Кокчетаву
          и области
        </p>
        <button className={styles.price_list}>Прайс-лист</button>
      </div>
      <div className={styles.parameters}>
        <div className={styles.parameter}>
          <p className={styles.subtitle}>Производитель:</p>
          <p className={styles.value}>{product.manufacturer}</p>
        </div>
        <div className={styles.parameter}>
          <p className={styles.subtitle}>Бренд:</p>
          <p className={styles.value}>{product.brand}</p>
        </div>
        <div className={styles.parameter}>
          <p className={styles.subtitle}>Артикул:</p>
          <p className={styles.value}>{product.barcode}</p>
        </div>
        <div className={styles.parameter}>
          <p className={styles.subtitle}>Штрихкод:</p>
          <p className={styles.value}>{product.barcode}</p>
        </div>
      </div>
      <div className={styles.description}>
        <div className={styles.title}>
          <h5>Описание</h5>
          <button
            className={
              activeDescription ? styles.button_active : styles.button_no_active
            }
            onClick={() => {
              setActiveDescription(!activeDescription);
            }}
          ></button>
        </div>
        <p
          className={
            activeDescription
              ? styles.description_text
              : styles.description_text_none
          }
        >
          {product.description}
        </p>
      </div>

      <div className={styles.characteristics_div}>
        <div className={styles.title}>
          <h5>Характеристики</h5>
          <button
            className={
              activeCharacteristics
                ? styles.button_active
                : styles.button_no_active
            }
            onClick={() => {
              setActiveCharacteristics(!activeCharacteristics);
            }}
          ></button>
        </div>
        <div
          className={
            activeCharacteristics
              ? styles.characteristics
              : styles.characteristics_none
          }
        >
          <div className={styles.parameter}>
            <p className={styles.subtitle}>Назначение:</p>
            <p className={styles.value}>{product.brand}</p>
          </div>
          <div className={styles.parameter}>
            <p className={styles.subtitle}>Тип:</p>
            <p className={styles.value}>{product.brand}</p>
          </div>
          <div className={styles.parameter}>
            <p className={styles.subtitle}>Производитель:</p>
            <p className={styles.value}>{product.manufacturer}</p>
          </div>
          <div className={styles.parameter}>
            <p className={styles.subtitle}>Бренд:</p>
            <p className={styles.value}>{product.brand}</p>
          </div>
          <div className={styles.parameter}>
            <p className={styles.subtitle}>Артикул:</p>
            <p className={styles.value}>{product.barcode}</p>
          </div>
          <div className={styles.parameter}>
            <p className={styles.subtitle}>Штрихкод:</p>
            <p className={styles.value}>{product.barcode}</p>
          </div>
          <div className={styles.parameter}>
            <p className={styles.subtitle}>Вес:</p>
            <p className={styles.value}>{product.size_type}</p>
          </div>
          <div className={styles.parameter}>
            <p className={styles.subtitle}>Объем:</p>
            <p className={styles.value}>{product.size_type}</p>
          </div>
          <div className={styles.parameter}>
            <p className={styles.subtitle}>Кол-во в коробке:</p>
            <p className={styles.value}>{product.size_type}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
