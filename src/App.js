import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { isExpired, decodeToken } from "react-jwt";
import UserContext from "./context/userContext";
import ProductsContext from "./context/productsContext";
import getProducts from "./actions/products/getproducts";
import Layout from "./components/layout/layout.component";
import Home from "./pages/home/home.page.jsx";
import Signup from "./pages/signup/signup.page.jsx";
import Login from "./pages/login/login.page.jsx";
import Buy from "./pages/buy/buy.pages";
import Sell from "./pages/sell/sell.page.jsx";
import Exchange from "./pages/exchange/exchange.pages.jsx";
import Order from "./pages/order/order";
import VerifyPage from "./pages/verify/verify.jsx";
import Dashboard from "./pages/dashboard/dashboard.pages";

import "./App.css";

const App = () => {
  const [user, setUser] = React.useState(
    decodeToken(localStorage.getItem("token")) || {}
  );
  const [products, setProducts] = React.useState();
  const isTokenExpired = isExpired(localStorage.getItem("token"));

  const UserProvider = React.useMemo(
    () => ({ user, setUser }),
    [user, setUser]
  );

  const ProductsProvider = React.useMemo(
    () => ({ products, setProducts }),
    [products, setProducts]
  );

  React.useEffect(() => {
    if (isTokenExpired) {
      localStorage.setItem("token", "");
      setUser();
    }
  }, [isTokenExpired]);

  React.useEffect(() => {
    getProducts({ setProducts });
  }, []);

  return (
    <UserContext.Provider value={UserProvider}>
      <ProductsContext.Provider value={ProductsProvider}>
        <Routes>
          <Route path="/" element={<Layout user={user} />}>
            <Route index element={<Home />} />
            <Route
              path="login"
              element={user ? <Navigate to="/" /> : <Login />}
            />
            <Route
              path="register"
              element={user ? <Navigate to="/" /> : <Signup />}
            />
            <Route path="buy-kamas" element={<Buy />} />
            <Route path="sell-kamas" element={<Sell />} />
            <Route path="exchange-kamas" element={<Exchange />} />
            <Route
              path="order/:type/:item"
              element={!user ? <Navigate to="/register" /> : <Order />}
            />
            <Route path="verify/:tokenId" element={<VerifyPage />} />
            <Route
              path="dashboard"
              element={!user ? <Navigate to="/register" /> : <Dashboard />}
            />
          </Route>
        </Routes>
      </ProductsContext.Provider>
    </UserContext.Provider>
  );
};

export default App;
