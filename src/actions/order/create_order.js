import API from "../../api/api";

const createOrder = ({
  order,
  setDetails,
  onOpen,
  setIsloading,
  toast,
  type,
}) => {
  setIsloading(true);
  API.post(`/order/${type}`, order)
    .then((res) => {
      setIsloading(false);
      if (order.payment_type === "usdt" && type === "buy") {
        setDetails({
          payment_id: res.data.payment_id,
          pay_address: res.data.pay_address,
          pay_amount: res.data.pay_amount,
        });
        onOpen();
      } else {
        toast({
          title: "Order created.",
          description: "Go check your order history to stay updated.",
          status: "success",
          duration: 5000,
          position: "bottom-right",
          isClosable: true,
        });
      }
    })
    .catch(() => {
      setIsloading(false);
    });
};

export default createOrder;
