import React, { FC } from "react";
import { useDispatch } from "react-redux";
import { data } from "../../data/JSON";
import { ALL_PRODUCTS } from "../../Redux/all-product/action-types";
import { getAllProduct } from "../../Redux/all-product/actions";
import { Banner } from "../Banner";
import { Footer } from "../Footer";
import { Header } from "../Header";
import { Products } from "../Products";
import styles from "./index.module.scss";

const dataOfProducts = JSON.parse(data);
export const Catalog: FC = () => {
  const put = useDispatch();
  put(getAllProduct(dataOfProducts));
  return (
    <div>
      <Header />
      <Products />
      <Footer />
    </div>
  );
};
