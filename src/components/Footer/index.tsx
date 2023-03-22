import React, { FC } from "react";
import logo from "../../images/icons/Logo_footer.svg";
import viseImg from "../../images/icons/Visa.svg";
import mastercardImg from "../../images/icons/mastercard.svg";
import waIcon from "../../images/icons/logos_wa.svg";
import telegramIcon from "../../images/icons/logos_telegram.svg";
import styles from "./index.module.scss";
export const Footer: FC = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <img src={logo} alt="" />
          <p>
            Компания «Султан» — снабжаем розничные магазины товарами "под ключ"
            в Кокчетаве и Акмолинской области
          </p>
          <p className={styles.subscribe}>Подпишись на скидки и акции</p>
          <div className={styles.email}>
            <input type="text" placeholder="Введите ваш E-mail" />
            <button className={styles.send_button}></button>
          </div>
        </div>
        <div className={styles.menu}>
          <h1>Меню сайта:</h1>
          <p>О компании</p>
          <p>Доставка и оплата</p>
          <p>Возврат</p>
          <p>Контакты</p>
        </div>
        <div className={styles.categories}>
          <h1>Категории:</h1>
          <p>Косметика и гигиена</p>
          <p>Товары для дома</p>
          <p>Товары для детей и мам</p>
          <p>Посуда</p>
        </div>
        <div className={styles.connection_in_Messengers}>
          <div className={styles.price_list}>
            <h1>Скачать прайс-лист:</h1>
            <button className={styles.price_list_button}>Прайс-лист</button>
          </div>
          <p>Связь в мессенджерах:</p>
          <div className={styles.icons}>
            <img src={waIcon} alt="" />
            <img src={telegramIcon} alt="" />
          </div>
        </div>
        <div className={styles.contacts}>
          <h1>Контакты:</h1>
          <h3>+7 (777) 490-00-91</h3>
          <p className={styles.time_of_work}>время работы: 9:00-20:00</p>
          <a href="">Заказать звонок</a>
          <h3>opt.sultan@mail.ru</h3>
          <p className={styles.subtext}>На связи в любое время</p>
          <div className={styles.cards}>
            <img src={viseImg} alt="" />
            <img src={mastercardImg} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};
