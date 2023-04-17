import React, { FC } from "react";
import styles from "./index.module.scss";
import LocationIcon from "../../../images/icons/location_icon.png";

export const AddressCompany: FC = () => {
  return (
    <div className={styles.address}>
      <img src={LocationIcon} alt="" />
      <div className={styles.info}>
        <h3>г. Кокчетав, ул. Ж. Ташенова 129Б </h3>
        <span>(Рынок Восточный)</span>
      </div>
    </div>
  );
};
