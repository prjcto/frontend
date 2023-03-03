import React from "react";
import SigninForm from '../../components/signinform'
import { Text, useToast } from "@chakra-ui/react";
import "./login.styles.scss";

const Login = () => {
  const toast = useToast();

  return (
    <div className="Login">
        <div className="Login-card">
        <Text  fontSize={"3xl"} p="20px" align="center"  >
            Login to your account
          </Text>
          <SigninForm toast={toast} />
        </div>
    </div>
  );
};

export default Login;
