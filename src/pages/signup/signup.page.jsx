import React from "react";
import {
  Text,
  useToast
} from "@chakra-ui/react";
import SignupForm from '../../components/signupform'
import "./signup.styles.scss";

const Signup = () => {
  const toast = useToast();

  return (
    
    <div className="Signup">

<div className="Sign-card">
          <Text  fontSize={"3xl"} p="10px" align="center"  >
            Create an account
          </Text>
          <div className="Signup-Form">
          <SignupForm  toast={toast} />
          </div>
      </div>

    </div>
    
  );
};

export default Signup;
