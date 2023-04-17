import React, { FC } from "react";
import styles from "./index.module.scss";
import banner_photo from "../../images/banner_image.png";
import { Link, Navigate, useNavigate } from "react-router-dom";
export const BannerDiscription: FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.description}>
        <div className={styles.div_offer}>
          <button>+</button>
          <p>Только самые выгодные предложения</p>
        </div>
        <div className={styles.div_offer}>
          <button>+</button>
          <p>
            Бесплатная доставка по <b>Кокчетаву от 10 тыс ₸</b>{" "}
          </p>
        </div>
      </div>
    </div>
  );
};
