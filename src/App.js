import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from "pages/Layout";
import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Product from "./pages/Product";

export default function App() {
  return (
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="product/:id" element={<Product />} />
        </Route>
      </Routes>
  );
}
