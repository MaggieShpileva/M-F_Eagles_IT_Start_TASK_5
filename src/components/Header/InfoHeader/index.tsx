import React, { FC } from "react";
import styles from "./index.module.scss";
import LocationIcon from "../../../images/icons/location_icon.png";
import phoneIcon from "../../../images/icons/cil_phone.png";
import MailIcon from "../../../images/icons/mail_icon.png";

export const InfoHeader: FC = () => {
  return (
    <div className={styles.top_row_menu}>
      <div className={styles.container}>
        <div className={styles.data_company}>
          <div className={styles.adress}>
            <img src={LocationIcon} alt="" />
            <div className={styles.info}>
              <h3>г. Кокчетав, ул. Ж. Ташенова 129Б </h3>
              <span>(Рынок Восточный)</span>
            </div>
          </div>
          <div className={styles.mail}>
            <img src={MailIcon} alt="" />
            <div className={styles.info}>
              <h3>opt.sultan@mail.ru </h3>
              <span>На связи в любое время</span>
            </div>
          </div>
          <div className={styles.sales_department}>
            <img src={phoneIcon} alt="" />
            <div className={styles.info}>
              <h3>Отдел продаж</h3>
              <span>+7 (777) 490-00-91</span>
            </div>
          </div>
          <div className={styles.request_a_call}>
            <button className={styles.call_button}></button>
            <a href="">Заказать звонок</a>
          </div>
        </div>
        <div className={styles.links_to_pages}>
          <a href="">О компании</a>
          <a href="">Доставка и оплата</a>
          <a href="">Возврат</a>
          <a href="">Контакты</a>
        </div>
      </div>
    </div>
  );
};
