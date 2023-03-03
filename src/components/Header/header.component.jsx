import React from "react";
import { Text } from "@chakra-ui/react";
import "./header.styles.scss";
import logo from "../../assets/logo.png";

const Header = () => {
  return (
    <div className="Section">
      <div className="sider"></div>
      <Text className="text">
        G<span>old</span>
      </Text>
      <img className="H-logo" src={logo} alt="GoldKamas" />
    </div>
  );
};

export default Header;
