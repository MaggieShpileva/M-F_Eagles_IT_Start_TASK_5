import React, { FC } from "react";
import styles from "./index.module.scss";
import LocationIcon from "../../images/icons/location_icon.png";
import MailIcon from "../../images/icons/mail_icon.png";
import logo from "../../images/icons/logo_Sultan.png";
import ManagerFoto from "../../images/icons/header_icon_women.png";
import basketIcon from "../../images/icons/icons_basket.png";

export const Header: FC = () => {
  return (
    <>
      <div className={styles.line}></div>
      <div className={styles.container}>
        <div className={styles.top_row_menu}>
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
          </div>
          <div className={styles.links_to_pages}>
            <a href="">О компании</a>
            <a href="">Доставка и оплата</a>
            <a href="">Возврат</a>
            <a href="">Контакты</a>
          </div>
        </div>
        <div className={styles.main_row_menu}>
          <div className={styles.logo_and_catalog}>
            <img src={logo} alt="" />
            <button className={styles.catalog_button}>Каталог</button>
          </div>
          <div className={styles.search}>
            <input type="text" placeholder="Поиск..." />
            <button className={styles.search_button}></button>
          </div>

          <div className={styles.contacts}>
            <div className={styles.info}>
              <h3>+7 (777) 490-00-91</h3>
              <p>время работы: 9:00-20:00</p>
              <a href="">Заказать звонок</a>
            </div>
            <img src={ManagerFoto} alt="" />
          </div>
          <div className={styles.price_list}>
            <button className={styles.price_list_button}>Прайс-лист</button>
          </div>
          <div className={styles.div_basket}>
            <div className={styles.basket}>
              <img src={basketIcon} alt="" />
              <span>1</span>
            </div>
            <div className={styles.info}>
              <p>Корзина</p>
              <h3>12 478 ₸ </h3>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
