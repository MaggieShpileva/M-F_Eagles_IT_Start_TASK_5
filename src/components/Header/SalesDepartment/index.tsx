import React, { FC } from "react";
import styles from "./index.module.scss";
import phoneIcon from "../../../images/icons/cil_phone.png";
import { AddressCompany } from "../AddressCompany";
import { MailCompany } from "../MailCompany";

export const SalesDepartment: FC = () => {
  return (
    <div className={styles.sales_department}>
      <img src={phoneIcon} alt="" />
      <div className={styles.info}>
        <h3>Отдел продаж</h3>
        <span>+7 (777) 490-00-91</span>
        <p>время работы: 9:00-20:00</p>
      </div>
    </div>
  );
};
