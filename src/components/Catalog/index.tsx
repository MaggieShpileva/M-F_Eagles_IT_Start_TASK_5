import React, { FC } from "react";
import { useDispatch } from "react-redux";
import { data } from "../../data/JSON";
import { allProducts } from "../../Redux/all-product/actions";
import { BreadCrumbs } from "../BreadCrumbs";
import { Footer } from "../Footer";
import { Header } from "../Header";
import { Products } from "../Products";
import styles from "./index.module.scss";

export const Catalog: FC = () => {
  return (
    <div>
      <Header />
      <BreadCrumbs />
      <Products />
      <Footer />
    </div>
  );
};
