import React, { FC } from "react";
import { Banner } from "../Banner";
import { Footer } from "../Footer";
import { Header } from "../Header";
import { Products } from "../Products";
import styles from "./index.module.scss";
export const Catalog: FC = () => {
  return (
    <div>
      <Header />
      <Banner />
      <Products />
      <Footer />
    </div>
  );
};
