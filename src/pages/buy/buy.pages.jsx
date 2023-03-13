import React from "react";
import ProductsContext from "../../context/productsContext";
import { Link } from "react-router-dom";
import { Text, Image } from "@chakra-ui/react";
import RateTable from "../../components/rate-table";
import dofus from "../../assets/Dofus.png";
import touch from "../../assets/touch.png";
import retro from "../../assets/retro.png";

import "./buy.styles.scss";

const Buy = () => {
  const { products } = React.useContext(ProductsContext);

  return (
    <div className="buy">
      <div className="upper">
        <Text fontSize="3xl" as="b">
          Buy Kamas
        </Text>
        <span className="underline"></span>
      </div>
      <div className="buy-cards">
        {products
          ?.filter((item) => item.category === "buy")

          .map((product, index) => (
            <div className="card" key={index}>
              <Link to={`/order/buy/${product._id}`}>
                {" "}
                <Image
                  src={
                    product.name === "Dofus Kamas"
                      ? dofus
                      : product.name === "Dofus Retro"
                      ? retro
                      : product.name === "Dofus Touch"
                      ? touch
                      : ""
                  }
                  className="img"
                />
                <Text fontSize="xl" as="b">
                  Méthode de livraison: Astrub, face à face
                </Text>
              </Link>
            </div>
          ))}
      </div>

      <RateTable category="buy" />
    </div>
  );
};

export default Buy;
