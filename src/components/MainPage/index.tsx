import React, { FC } from "react";
import { Banner } from "../Banner";
import { Footer } from "../Footer";
import { Header } from "../Header";
import styles from "./index.module.scss";
export const MainPage: FC = () => {
  return (
    <div data-testid="main-page">
      <Header />
      <Banner />
      <Footer />
    </div>
  );
};
