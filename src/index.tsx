import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import Pricing from "./Pricing/Pricing";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement,
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/pricing" element={<Pricing />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
);
