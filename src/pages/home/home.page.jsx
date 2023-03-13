import React from "react";
import Header from "../../components/Header/header.component";
import Info from "../../components/info/info.components";
import RateTable from "../../components/rate-table"
import "./home.styles.scss";

const Home = () => {
  return (
    <>
      <Header />
      <Info />
      <RateTable category="buy" />
      <div className="footer">
        <hr />
        <p>Copyright © 2023. All Rights Reserved.</p>
      </div>
    </>
  );
};

export default Home;
