import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import MainPage from "../src/components/pages/main/mainpage";
import Market from "../src/components/pages/market/market";
import Catalog from "../src/components/pages/catalog/catalog";
import Drivers from "../src/components/pages/drivers/drivers";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
        <Route index element={<MainPage />} />
        <Route path="/drivers" element={<Drivers />} />
        <Route path="/catalog" element={<Catalog />} />
        <Route path="/market" element={<Market />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
