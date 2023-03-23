import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Header } from "./components/Header";
import { MainPage } from "./components/MainPage";

import { Catalog } from "./components/Catalog";

export const App = () => {
  return (
    <div className="App">
      <Catalog />
    </div>
  );
};

export default App;
