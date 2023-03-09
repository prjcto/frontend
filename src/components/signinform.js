import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import SigninSchema from "../validations/SigninSchema";
import signin from "../actions/auth/signin";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import {
  Text,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
  Button,
  Center,
  Link,
} from "@chakra-ui/react";

const SigninForm = ({ toast }) => {
  const [isLoading, setisLoading] = React.useState(false);
  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow(!show);

  return (
    <Formik
      initialValues={{
        email: "",
        password: "",
      }}
      validationSchema={SigninSchema}
      onSubmit={(values, { resetForm }) => {
        signin({ setisLoading, values, resetForm, toast });
      }}
    >
      <Form className="Login-Form">
        <FormLabel>E-Mail Address</FormLabel>
        <ErrorMessage name="email" />
        <Input as={Field} name="email" type="email" focusBorderColor="white" />
        <FormLabel>Password</FormLabel>
        <ErrorMessage name="password" />
        <InputGroup size="md">
          <Input
            Input
            as={Field}
            name="password"
            pr="4.5rem"
            type={show ? "text" : "password"}
            focusBorderColor="white"
          />
          <InputRightElement width="3.5rem">
            <Button h="1.75rem" size="sm" onClick={handleClick} color="black">
              {show ? <ViewOffIcon /> : <ViewIcon />}
            </Button>
          </InputRightElement>
        </InputGroup>
        <Text className="help">
          <Link color={"blue.200"} href="login">
            Forgot password?
          </Link>
        </Text>
        <Center mt="2vh">
          <Button
            type="submit"
            isLoading={isLoading}
            colorScheme="yellow"
            loadingText="Submitting"
          >
            Login
          </Button>
        </Center>
      </Form>
    </Formik>
  );
};

export default SigninForm;
