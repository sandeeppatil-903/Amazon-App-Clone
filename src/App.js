import "./App.css";
import { useState, useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./Components/Home";
import Lists from "./Components/Lists";
import ProductPage from "./Components/ProductPage";
import CartSection from "./Components/CartSection";
import Profile from "./Components/Profile";
import Orders from "./Components/Orders";
import Error from "./Components/Error";

function App() {
  return (
    <Routes>
      <>
        <Route exact path="/" element={<Home />} />
        <Route path="/wishlists" element={<Lists />} />
        <Route path="/cart" element={<CartSection />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/account" element={<Profile />} />
        <Route path="/product/:id" element={<ProductPage />} />
        {/* <Route path="*" element={<Error />} /> */}
      </>
    </Routes>
  );
}

export default App;
