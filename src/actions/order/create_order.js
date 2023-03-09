import API from "../../api/api";

const createOrder = ({ order, setDetails }) => {
  API.post("/order", order)
    .then((res) => {
      console.log(res.data);
      if (order.payment_methode === "usdt") {
        console.log("succes");
      } else if (order.payment_methode === "cih") {
        setDetails({
          payment_id: res.data.payment_id,
          pay_adress: res.data.adress,
        });
      }
    })
    .catch((err) => console.error(err));
};

export default createOrder;
