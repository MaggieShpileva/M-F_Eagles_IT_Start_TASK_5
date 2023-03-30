import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Header } from "./components/Header";
import { MainPage } from "./components/MainPage";

import { Catalog } from "./components/Catalog";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import { ProductPage } from "./components/ProductPage";
import { BasketPage } from "./components/BasketPage";

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/catalog" element={<Catalog />} />
        <Route path="/product/:barcode" element={<ProductPage />} />
        <Route path="/basket" element={<BasketPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
