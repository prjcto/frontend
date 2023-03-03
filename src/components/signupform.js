import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import { FaPhoneAlt } from "react-icons/fa";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import {
  Text,
  FormLabel,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Button,
  Link,
  Center,
} from "@chakra-ui/react";
import SignupSchema from "../validations/SignupSchema";
import signUp from "../actions/auth/signup";

const SignupForm = ({ toast }) => {
  const [isLoading, setisLoading] = React.useState(false);

  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow(!show);

  const [showw, setShoww] = React.useState(false);
  const handleeClick = () => setShoww(!showw);

  return (
    <Formik
      initialValues={{
        firstname: "",
        lastname: "",
        email: "",
        phone: "",
        password: "",
        confirmpassword: "",
      }}
      validationSchema={SignupSchema}
      onSubmit={(values, { resetForm }) => {
        signUp({ values, resetForm, toast, setisLoading });
      }}
    >
      <Form>
        <FormLabel>First Name</FormLabel>
        <ErrorMessage name="firstname" />
        <Input
          as={Field}
          id="firstname"
          name="firstname"
          type="text"
          focusBorderColor="white"
        />
        <FormLabel>Last Name</FormLabel>
        <ErrorMessage name="lastname" />
        <Input
          as={Field}
          id="lastname"
          name="lastname"
          type="text"
          focusBorderColor="white"
        />
        <FormLabel>E-Mail</FormLabel>
        <ErrorMessage name="email" />
        <Input
          as={Field}
          id="email"
          name="email"
          type="email"
          focusBorderColor="white"
        />
        <FormLabel>Telephone</FormLabel>
        <ErrorMessage name="phone" />
        <InputGroup>
          <InputLeftElement pointerEvents="none" children={<FaPhoneAlt />} />
          <Input
            as={Field}
            id="phone"
            name="phone"
            type="number"
            focusBorderColor="white"
          />
        </InputGroup>
        <div className="Signup-Form2">
          <FormLabel>Password</FormLabel>
          <ErrorMessage name="password" />
          <InputGroup size="md">
            <Input
              as={Field}
              id="password"
              name="password"
              type={show ? "text" : "password"}
              pr="4.5rem"
              focusBorderColor="white"
            />
            <InputRightElement width="3.5rem">
              <Button h="1.75rem" size="sm" onClick={handleClick} color="black">
                {show ? <ViewOffIcon /> : <ViewIcon />}
              </Button>
            </InputRightElement>
          </InputGroup>
          <FormLabel>Password Confirm</FormLabel>
          <ErrorMessage name="confirmpassword" />

          <InputGroup size="md">
            <Input
              as={Field}
              id="confirmpassword"
              name="confirmpassword"
              type={showw ? "text" : "password"}
              pr="4.5rem"
              focusBorderColor="white"
            />
            <InputRightElement width="3.5rem">
              <Button
                h="1.75rem"
                size="sm"
                onClick={handleeClick}
                color="black"
              >
                {showw ? <ViewOffIcon /> : <ViewIcon />}
              </Button>
            </InputRightElement>
          </InputGroup>
        </div>
        <Text className="help">
          Already have an account?{" "}
          <Link color={"blue.200"} href="login">
            Sign in.
          </Link>
        </Text>

        <Center mt="2vh">
          <Button
            isLoading={isLoading}
            colorScheme="yellow"
            loadingText="Submitting"
            type="submit"
          >
            Continue
          </Button>
        </Center>
      </Form>
    </Formik>
  );
};

export default SignupForm;
