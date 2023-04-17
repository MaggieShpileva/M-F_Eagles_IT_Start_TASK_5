import React, { FC, useEffect, useState } from "react";
import styles from "./index.module.scss";
import MailIcon from "../../../images/icons/mail_icon.png";

export const SiteMenu: FC = () => {
  return (
    <div className={styles.links_to_pages}>
      <h1 className={styles.site_menu_title}>Меню сайта:</h1>
      <a href="">О компании</a>
      <a href="">Доставка и оплата</a>
      <a href="">Возврат</a>
      <a href="">Контакты</a>
      <button className={styles.mobile_button_price_list}>Прайс-лист</button>
    </div>
  );
};
