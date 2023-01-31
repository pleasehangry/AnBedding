import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Header, Footer, LiveChat } from "./components";
import {
  CartScreen,
  HomeScreen,
  LoginScreen,
  OrderScreen,
  OrderListScreen,
  PaymentScreen,
  ProductEditScreen,
  ProductListScreen,
  ProductScreen,
  ProfileScreen,
  RegisterScreen,
  ShippingScreen,
  UserEditScreen,
  UserListScreen,
} from "./screens";

import "./App.css";

function App() {
  return (
    <Router>
      <Header />
      <main className="">
        <Routes>
          <Route path="/order/:id" element={<OrderScreen />} />
          <Route path="/shipping" element={<ShippingScreen />} />
          <Route path="/payment" element={<PaymentScreen />} />
          <Route path="/login" element={<LoginScreen />} />
          <Route path="/register" element={<RegisterScreen />} />
          <Route path="/profile" element={<ProfileScreen />} />
          <Route path="/product/:id" element={<ProductScreen />} />
          <Route path="/cart/:id?" element={<CartScreen />} />
          <Route path="/admin/userlist" element={<UserListScreen />} />
          <Route path="/admin/user/:id/edit" element={<UserEditScreen />} />
          <Route
            path="/admin/productlist"
            element={<ProductListScreen />}
            exact
          />
          <Route
            path="/admin/productlist/:pageNumber"
            element={<ProductListScreen />}
            exact
          />
          <Route
            path="/admin/product/:id/edit"
            element={<ProductEditScreen />}
          />
          <Route path="/admin/orderlist" element={<OrderListScreen />} />
          <Route path="/search/:keyword" element={<HomeScreen />} exact />
          <Route path="/page/:pageNumber" element={<HomeScreen />} exact />
          <Route
            path="/search/:keyword/page/:pageNumber"
            element={<HomeScreen />}
            exact
          />
          <Route path="/" element={<HomeScreen />} exact />
        </Routes>
      </main>
      <Footer />
      <LiveChat />
    </Router>
  );
}

export default App;
