import React from "react";
import ProductsContext from "../../context/productsContext";
import UserContext from "../../context/userContext";
import ExchangeSelect from "../../components/exchange-select";
import RateTable from "../../components/rate-table";
import createOrder from "../../actions/order/create_order";
import calculateEstimation from "./calculate_estimation";
import {
  FormControl,
  FormLabel,
  Select,
  Input,
  Button,
  Text,
  Center,
  useToast,
} from "@chakra-ui/react";

import "./exchange.styles.scss";

const Exchange = () => {
  const { products } = React.useContext(ProductsContext);
  const { user } = React.useContext(UserContext);
  const toast = useToast();
  const [productId, setProductId] = React.useState();
  const [product, setProduct] = React.useState({});
  const [youpay, setYoupay] = React.useState({
    server: "",
    quantity: 0,
    character: "",
  });
  const [youreceive, setYoureceive] = React.useState({
    server: "",
    quantity: 0,
    character: "",
  });
  const [isAllowed, setIsAllowed] = React.useState(false);
  const [code, setCode] = React.useState(0);
  const [fees, setFees] = React.useState({});
  const [isLoading, setIsloading] = React.useState(false);
  const [quanityValue, setQuanityValue] = React.useState(0);

  const generateCode = () => {
    const length = 15;
    const charset =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let result = "";
    for (let i = 0; i < length; i++) {
      result += charset.charAt(Math.floor(Math.random() * charset.length));
    }
    return result;
  };

  React.useEffect(() => {
    const newCode = generateCode();

    setCode(newCode);
  }, [productId]);

  React.useEffect(() => {
    products.forEach((product) => {
      if (product._id === productId) {
        setProduct(product);
      }
    });
  }, [productId, products]);

  React.useEffect(() => {
    calculateEstimation({ youpay, youreceive, setIsAllowed, product, setFees });
  }, [youpay, product, youreceive]);

  React.useEffect(() => {
    setQuanityValue(parseInt(youpay.quantity) * fees.fee || 0);
  }, [fees, youpay]);

  React.useEffect(() => {
    if (parseInt(youpay.quantity) >= 5) {
      setIsAllowed(false);
    } else {
      setIsAllowed(true);
    }
  }, [quanityValue, youpay]);

  const handleSubmit = () => {
    const order = {
      youpay: {
        server: youpay.server,
        quantity: youpay.quantity,
        character: youpay.character,
      },
      youreceive: {
        server: youreceive.server,
        quantity: youreceive.quantity,
        character: youreceive.character,
      },
      product: product._id,
      customer: user.userId,
      code: code,
    };
    let type = "exchange";

    createOrder({ order, setIsloading, toast, type });
  };

  return (
    <div className="Exchange">
      {!productId ? (
        <>
          <ExchangeSelect products={products} setProductId={setProductId} />
          <RateTable category="buy" />
        </>
      ) : (
        <FormControl>
          <Text fontSize="2xl" as="b">
            {product?.name}
          </Text>
          <FormLabel>Server you pay</FormLabel>
          <Select
            value={youpay.server}
            onChange={(e) => setYoupay({ ...youpay, server: e.target.value })}
            placeholder="--Select your server--"
          >
            {product?.price?.map((item, index) => (
              <option key={index} value={item.server}>
                {item.server}
              </option>
            ))}{" "}
          </Select>
          <FormLabel>Quantity you pay(Million)</FormLabel>
          <Input
            type="number"
            value={youpay.quantity}
            onChange={(e) => setYoupay({ ...youpay, quantity: e.target.value })}
          />
          <FormLabel>Character you pay</FormLabel>
          <Input
            type="text"
            value={youpay.character}
            onChange={(e) =>
              setYoupay({ ...youpay, character: e.target.value })
            }
          />
          <FormLabel>Server you receive</FormLabel>
          <Select
            value={youreceive.server}
            placeholder="--Select your server--"
            onChange={(e) =>
              setYoureceive({ ...youreceive, server: e.target.value })
            }
          >
            {product?.price?.map((item, index) => (
              <option key={index} value={item.server}>
                {item.server}
              </option>
            ))}{" "}
          </Select>
          <FormLabel>Quantity you receive(Million)</FormLabel>
          <Input value={quanityValue} disabled />
          <FormLabel>Character you receive</FormLabel>
          <Input
            value={youreceive.character}
            onChange={(e) =>
              setYoureceive({ ...youreceive, character: e.target.value })
            }
          />
          <FormLabel>Code for exchange</FormLabel>
          <Input disabled value={code} />
          <Center mt="2vh">
            <Button
              as={"button"}
              isLoading={isLoading}
              loadingText="Submiting"
              isDisabled={isAllowed}
              onClick={handleSubmit}
            >
              Continue
            </Button>
            <Button
              as="button"
              variant="ghost"
              onClick={() => setProductId()}
              m="10px"
            >
              Back
            </Button>
          </Center>
        </FormControl>
      )}
    </div>
  );
};

export default Exchange;
