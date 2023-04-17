import React, { FC } from "react";
import { Header } from "../Header";
import styles from "./index.module.scss";
import banner_photo from "../../images/banner_image.png";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { BannerDiscription } from "./BannerDiscription";
export const Banner: FC = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/catalog");
  };
  return (
    <>
      <div className={styles.banner_foto}>
        <div className={styles.banner_title}>
          <h2>Бытовая химия, косметика и хозтовары</h2>
          <h6>оптом по кокчетаву и области</h6>
          <button className={styles.catalog_button} onClick={handleClick}>
            В КАТАЛОГ
          </button>
        </div>
      </div>
      <BannerDiscription />
    </>
  );
};
