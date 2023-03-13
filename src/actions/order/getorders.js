import API from "../../api/api";
import axios from "axios";

const getOrders = ({ setOrders }) => {
  API.get("/order")
    .then((res) => {
      setOrders(res.data);
    })
    .catch((err) => console.error(err));
};

const getStatus = ({ order, index, setStatus }) => {
  setStatus({});
  axios
    .get(
      `https://api.nowpayments.io/v1/payment/${order.payment_details.payment_id}`,
      {
        headers: {
          "x-api-key": "J8E146F-PQ64GT9-PFX0VXK-YQQ2G9X",
        },
      }
    )
    .then((res) => {
      setStatus({ index: index, status: res.data.payment_status });
    })
    .catch((err) => console.error(err));
};

export { getStatus };
export default getOrders;
