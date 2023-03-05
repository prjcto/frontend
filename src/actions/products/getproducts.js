import API from "../../api/api";

const getProducts = ({ setProducts }) => {
  API.get("/product")
    .then((res) => {
      setProducts(res.data);
    })
    .catch((err) => console.log(err));
};

export default getProducts;
