import React, { FC } from "react";
import { useDispatch } from "react-redux";
import { data } from "../../data/JSON";
import { allProducts } from "../../Redux/all-product/actions";
import { Footer } from "../Footer";
import { Header } from "../Header";
import { Products } from "../Products";
import styles from "./index.module.scss";

const dataOfProducts = JSON.parse(data);
export const Catalog: FC = () => {
  return (
    <div>
      <Header />
      <Products />
      <Footer />
    </div>
  );
};
