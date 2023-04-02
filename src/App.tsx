import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Header } from "./components/Header";
import { MainPage } from "./components/MainPage";

import { Catalog } from "./components/Catalog";
import { HashRouter, Route, Router, Routes } from "react-router-dom";
import { ProductPage } from "./components/ProductPage";
import { CartPage } from "./components/CartPage";
import { data } from "./data/JSON";
import { useDispatch } from "react-redux";
import { allProducts } from "./Redux/all-product/actions";

export const App = () => {
  const dataOfProducts = JSON.parse(data);
  const put = useDispatch();
  put(allProducts(dataOfProducts));

  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/catalog" element={<Catalog />} />
        <Route path="/product/:filter/:barcode" element={<ProductPage />} />
        <Route path="/cart" element={<CartPage />} />
      </Routes>
    </HashRouter>
  );
};

export default App;
