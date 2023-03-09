import React from "react";
import { useParams } from "react-router-dom";
import UserContext from "../../context/userContext";
import ProductsContext from "../../context/productsContext";
import createOrder from "../../actions/order/create_order";
import {
  Text,
  FormControl,
  FormLabel,
  Select,
  Input,
  Button,
  Link,
} from "@chakra-ui/react";

const Order = () => {
  let { type, item } = useParams();
  let { user } = React.useContext(UserContext);
  let { products } = React.useContext(ProductsContext);
  let [product, setProduct] = React.useState({});
  let [methode, setMethode] = React.useState();
  let [details, setDetails] = React.useState({});

  let [server, setServer] = React.useState("");
  let [name, setName] = React.useState("");
  let [amout, setAmout] = React.useState(0);
  let [price, setPrice] = React.useState(0);

  const handleSubmit = () => {
    let order = {
      payment_type: methode,
      amount: `${amout}m`,
      price: price,
      ingame_name: name,
      server: server,
      customer: user?.userId,
      product: item,
    };

    createOrder({ order, setDetails });
  };

  React.useEffect(() => {
    const filtredProduct = products?.filter(
      (product) => product._id === item
    )[0];
    setProduct(filtredProduct);
  }, [products, item]);

  React.useEffect(() => {
    let serverList =
      product?.price?.filter((item) => item.server === server) || [];
    let calculatedPrice = amout * serverList[0]?.price_usdt || 0;
    setPrice(calculatedPrice || 0);
  }, [amout, server, product]);

  return (
    <div className="Sell">
      {user ? (
        <div>
          <>
            <Text fontSize="2xl" as="b">
              {product?.name} ({type})
            </Text>
            <FormControl className="all">
              <FormControl className="left">
                <FormLabel>Server:</FormLabel>
                <Select
                  value={server}
                  onChange={(e) => setServer(e.target.value)}
                  placeholder="Server..."
                >
                  {product?.price?.map(({ server }, index2) => (
                    <option value={server}>{server}</option>
                  ))}
                </Select>
                <FormLabel>Character Name:</FormLabel>
                <Input
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  type="text"
                />
                <FormLabel>Payment Method:</FormLabel>
                <Select
                  value={methode}
                  onChange={(e) => setMethode(e.target.value)}
                  placeholder="Choose one..."
                >
                  <option value="cih">CIH banque</option>
                  <option value="usdt">Usdt (trc-20)</option>
                </Select>
                {methode === "cih" ? (
                  <>
                    <FormLabel>Cih rib:</FormLabel>
                    <Input name="rib" type="number" />
                  </>
                ) : (
                  ""
                )}
                <Text marginBlockStart="1em">
                  Quantity (million, ps:10.3=10,300,000):
                </Text>
                <FormLabel>
                  Kamas {price}
                  {methode === "usdt"
                    ? " usdt"
                    : methode === "cih"
                    ? "dh"
                    : "$"}
                </FormLabel>
                <Input
                  value={amout}
                  onChange={(e) => {
                    setAmout(e.target.value);
                  }}
                />
                <Button type="submit" onClick={() => handleSubmit()}>
                  Order
                </Button>
              </FormControl>
            </FormControl>
          </>
        </div>
      ) : (
        <Text
          fontSize="xl"
          marginBlockStart="2em"
          marginBlockEnd="0.5em"
          align={"center"}
        >
          <Link href="login" color={"blue.400"}>
            Login
          </Link>{" "}
          first before place order
        </Text>
      )}
    </div>
  );
};

export default Order;
