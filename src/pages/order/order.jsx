import React from "react";
import { useParams } from "react-router-dom";
import UserContext from "../../context/userContext";
import ProductsContext from "../../context/productsContext";
import createOrder from "../../actions/order/create_order";
import OrderForm from "../../components/order-form";
import { Text, Link, useDisclosure, useToast } from "@chakra-ui/react";

const Order = () => {
  let { type, item } = useParams();
  let { user } = React.useContext(UserContext);
  let { products } = React.useContext(ProductsContext);
  let [product, setProduct] = React.useState({});
  let [methode, setMethode] = React.useState();
  let [details, setDetails] = React.useState({});

  let [server, setServer] = React.useState("");
  let [name, setName] = React.useState("");
  let [skrillemail, setSkrillemail] = React.useState(`${user?.email}`);
  let [amout, setAmout] = React.useState(0);
  let [price, setPrice] = React.useState(0);
  let [isLoading, setIsloading] = React.useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const toast = useToast();

  const handleSubmit = () => {
    let order = {
      payment_type: methode,
      amount: `${amout}m`,
      price: price,
      ingame_name: name,
      server: server,
      customer: user?.userId,
      product: item,
      skrill_email: skrillemail,
    };

    createOrder({ order, setDetails, onOpen, setIsloading, toast });
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

    if (methode === "usdt") {
      setPrice(amout * serverList[0]?.price_usdt || 0);
    } else if (methode === "skrill") {
      setPrice(amout * serverList[0]?.price_skrill || 0);
    } else setPrice(0);
  }, [amout, server, product, methode]);

  return (
    <div className="Sell">
      {user ? (
        <OrderForm
          product={product}
          type={type}
          name={name}
          server={server}
          setServer={setServer}
          setName={setName}
          methode={methode}
          setMethode={setMethode}
          skrillemail={skrillemail}
          setSkrillemail={setSkrillemail}
          price={price}
          amout={amout}
          setAmout={setAmout}
          handleSubmit={handleSubmit}
          isOpen={isOpen}
          onOpen={onOpen}
          onClose={onClose}
          details={details}
          isLoading={isLoading}
        />
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
