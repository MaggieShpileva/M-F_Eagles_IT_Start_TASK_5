import React, { FC, useEffect, useState } from "react";
import styles from "./index.module.scss";
import MailIcon from "../../../images/icons/mail_icon.png";

export const MailCompany: FC = () => {
  return (
    <div className={styles.mail}>
      <img src={MailIcon} alt="" />
      <div className={styles.info}>
        <h3>opt.sultan@mail.ru </h3>
        <span>На связи в любое время</span>
      </div>
    </div>
  );
};
