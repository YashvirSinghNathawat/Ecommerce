import "./App.css";
import Header from "./component/layout/Header/Header.js";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import WebFont from "webfontloader";
import React, { useState, useEffect } from "react";
import Footer from "./component/layout/Footer/footer";
import Home from "./component/Home/Home.js";
import ProductDetails from "./component/Product/ProductDetails.js";
import Products from "./component/Product/Products.js";
import Search from "./component/Product/Search.js";
import LoginSignUp from "./component/User/LoginSignUp";
import Profile from "./component/User/Profile.js";
import UpdatePassword from "./component/User/UpdatePassword.js";
import UpdateProfile from "./component/User/UpdateProfile.js";
import ForgotPassword from "./component/User/ForgotPassword.js";
import ResetPassword from "./component/User/ResetPassword.js";
import ConfirmOrder from "./component/Cart/ConfirmOrder.js";
import Shipping from "./component/Cart/Shipping.js";
import Payment from "./component/Cart/Payment.js";
import Cart from "./component/Cart/Cart.js";
import OrderSuccess from "./component/Cart/OrderSuccess.js";
import MyOrders from "./component/Order/MyOrders.js";
import OrderDetails from "./component/Order/OrderDetails.js";
import Dashboard from "./component/Admin/Dashboard.js";
import ProductList from "./component/Admin/ProductList.js";
import UpdateProduct from "./component/Admin/UpdateProduct.js";

import store from "./store";
import UserOptions from "./component/layout/Header/UserOptions.js";
import { loadUser } from "./actions/userAction";
import { useSelector } from "react-redux";
import ProtectedRoute from "./component/Route/ProtectedRoute";
import axios from "axios";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import NewProduct from "./component/Admin/NewProduct";

function App() {
  const { isAuthenticated, user, loading } = useSelector((state) => state.user);

  const [stripeApiKey, setStripeApiKey] = useState("");
  const [stripePromise, setStripePromise] = useState(loadStripe(stripeApiKey));

  async function getStripeApiKey() {
    const { data } = await axios.get("/api/v1/stripeapikey");
    setStripeApiKey(data.stripeApiKey);
  }

  useEffect(() => {
    WebFont.load({
      google: {
        families: ["Roboto", "Droid Sans", "Chilanka"],
      },
    });
    store.dispatch(loadUser());
    getStripeApiKey();
  }, []);
  return (
    // Components
    <Router>
      <Header />
      {isAuthenticated && <UserOptions user={user} />}
      <Elements stripe={stripePromise}>
        {loading === false && (
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/product/:id" element={<ProductDetails />} />
            <Route exact path="/products" element={<Products />} />
            <Route path="/products/:keyword" element={<Products />} />
            <Route exact path="/search" element={<Search />} />
            <Route exact path="/password/forgot" element={<ForgotPassword />} />
            <Route exact path="/cart" element={<Cart />} />
            <Route
              exact
              path="/password/reset/:token"
              element={<ResetPassword />}
            />
            <Route exact path="/login" element={<LoginSignUp />} />

            <Route element={<ProtectedRoute isAdmin={false} />}>
              <Route exact path="/account" element={<Profile />} />
              <Route exact path="/me/update" element={<UpdateProfile />} />
              <Route
                exact
                path="/password/update"
                element={<UpdatePassword />}
              />
              <Route exact path="/shipping" element={<Shipping />} />
              {stripePromise && (
                <Route exact path="/order/confirm" element={<ConfirmOrder />} />
              )}
              <Route
                exact
                path="/process/payment"
                element={<Payment />}
              ></Route>
              <Route exact path="/success" element={<OrderSuccess />}></Route>
              <Route exact path="/orders" element={<MyOrders />}></Route>
              <Route exact path="/order/:id" element={<OrderDetails />}></Route>
            </Route>
            {/* Admin Routes */}
            <Route element={<ProtectedRoute isAdmin={true} />}>
              <Route
                exact
                path="/admin/dashboard"
                element={<Dashboard />}
              ></Route>
              <Route
                exact
                path="/admin/products"
                element={<ProductList />}
              ></Route>
              <Route
                exact
                path="/admin/product"
                element={<NewProduct />}
              ></Route>
              <Route
                exact
                path="/admin/product/:id"
                element={<UpdateProduct />}
              ></Route>
            </Route>
          </Routes>
        )}
      </Elements>
      <Footer />
    </Router>
  );
}

export default App;
