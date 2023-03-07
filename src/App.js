import React from "react";
import { Routes, Route } from "react-router-dom";
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
// import Dofus from "./dofuses/sell/dofus/dofus.jsx";
// import Touch from "./dofuses/sell/touch/touch.jsx";
// import Retro from "./dofuses/sell/retro/retro.jsx";
// import DofusB from "./dofuses/buy/dofus/dofus.jsx";
// import TouchB from "./dofuses/buy/touch/touch.jsx";
// import RetroB from "./dofuses/buy/retro/retro.jsx";
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
    console.log(user);
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
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Signup />} />
            <Route path="buy-kamas" element={<Buy />} />
            <Route path="sell-kamas" element={<Sell />} />
            <Route path="exchange-kamas" element={<Exchange />} />
            {/* <Route path="dofus-sell" element={<Dofus />} />
            <Route path="dofus-touch-sell" element={<Touch />} />
            <Route path="dofus-retro-sell" element={<Retro />} />
            <Route path="buy-kamas" element={<Buy />} />
            <Route path="dofus-buy" element={<DofusB />} />
            <Route path="dofus-touch-buy" element={<TouchB />} />
            <Route path="dofus-retro-buy" element={<RetroB />} /> */}
            <Route path="verify/:tokenId" element={<VerifyPage />} />
            <Route path="dashboard" element={<Dashboard />} />
          </Route>
        </Routes>
      </ProductsContext.Provider>
    </UserContext.Provider>
  );
};

export default App;
