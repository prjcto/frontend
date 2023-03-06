import React from "react";
import "./verify.styles.scss";
import { MdMarkEmailRead } from "react-icons/md";
import {
  Text,
  Card,
  CardHeader,
  Heading,
  CardBody,
  CardFooter,
  Button,
  Link
} from "@chakra-ui/react";
const VerifyPage = () => {
  return (
    <div className="Verify">
      <div className="v-card">
        <Card align="center" padding={'20px'} bg={'transparent'} backdropBlur={'40px'}>
          <MdMarkEmailRead className="v-icon" />
          <CardHeader>
            <Heading size="md"> Please verify your email</Heading>
          </CardHeader>
          <CardBody>
            <Text textAlign={"center"}>
              You're almost there! We sent an email to
            </Text>
            <Text className="c-email">
              email@email.com
            </Text>
            <br />
            <Text >
              Just click on the link on your email to complete your signup.
            </Text>
            <Text>
              if you don't see it, you may need yo check you spam folder.
            </Text>
            <br />
            <Text textAlign={"center"}>still can't find the email ?</Text>
          </CardBody>
          <CardFooter>
            <Button colorScheme="yellow">Resend Email</Button>
          </CardFooter>
          <Text>
            Need Help ? <Link color={'blue.500'}>Contact Us</Link>
          </Text>
        </Card>
      </div>
    </div>
  );
};

export default VerifyPage;
