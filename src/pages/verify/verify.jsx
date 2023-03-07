import React from "react";
import { decodeToken } from "react-jwt";
import UserContext from "../../context/userContext";
import { MdMarkEmailRead } from "react-icons/md";
import API from "../../api/api";
import {
  Text,
  Card,
  CardHeader,
  Heading,
  CardBody,
  Center,
  Link,
  useToast
} from "@chakra-ui/react";
import {
  useParams,
  useNavigate 
} from "react-router-dom";
import "./verify.styles.scss";

const VerifyPage = () => {
  let { tokenId } = useParams();
  let navigate = useNavigate();

  const toast = useToast();

  let { user } = React.useContext(UserContext)
  let { email } = decodeToken(tokenId)

  React.useEffect(() => {
    if(!user) {
      API.patch(`/user/verify/${tokenId}`)
    .then(() => {
      toast({
        title: "Your account has been verified",
        description: "You have full access to GoldKamas now!",
        status: "success",
        duration: 1500,
        position: "bottom-right",
        isClosable: true,
      });
      setTimeout(() => {
        navigate("/login"); 
      }, 1500);
    })
    .catch(() => {
      toast({
        title: "Something is wrong!",
        status: "error",
        position: "bottom-right",
        duration: 1500,
        isClosable: true,
      });
    })
    }
  }, [tokenId, navigate, user, toast])

  return (
    <div className="Verify">
      {user ? "" : (
        <Center h='90vh'>
        <div className="v-card">
          <Card align="center" padding={'20px'} bg={'transparent'} backdropBlur={'40px'}>
            <MdMarkEmailRead className="v-icon" />
            <CardHeader>
              <Heading size="md"> Your account is verified</Heading>
            </CardHeader>
            <CardBody>
              <Text textAlign={"center"}>
                You're almost there! We sent an email to
              </Text>
              <Text className="c-email">
                {email}
              </Text>
              <br />
              <Text >
                Just click on the link on your email to complete your signup.
              </Text>
              <Text>
                if you don't see it, you may need yo check you spam folder.
              </Text>
              <Text textAlign={"center"}>still can't find the email ?</Text>
            </CardBody>
            <Text>
              Need Help ? <Link color={'blue.500'}>Contact Us</Link>
            </Text>
          </Card>
        </div>
        </Center>
      )}
    </div>
  );
};

export default VerifyPage;
