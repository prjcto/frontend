import React from "react";
import { Text, Flex, Link, Image } from "@chakra-ui/react";

import dofus from "../../assets/Dofus.png";
import touch from "../../assets/touch.png";
import retro from "../../assets/retro.png";

import "./buy.styles.scss";

const Buy = () => {
  return (
    <div className="Buy">
      <Flex justifyContent="center" gap="10">
        <div className="card">
          <Link href="dofus-buy">
            <Text
              backgroundColor="#1c8a31"
              fontSize="xl"
              align={"center"}
              borderRadius="8px 8px 0 0"
            >
              Dofus Kamas
            </Text>
            <center>
              {" "}
              <Image src={dofus} className="img" />
            </center>
          </Link>
          <Text
            backgroundColor="#1c8a31"
            fontSize="xl"
            align={"center"}
            borderRadius="0 0 8px 8px"
          >
            <Text as="b">Delivery time: </Text>5 minutes à 24 heures.
            <br />
            <Text as="b">Méthode de livraison: </Text>Astrub, face à face.
          </Text>
        </div>


        <div className="card">
          <Link href="dofus-touch-buy">
            <Text
              backgroundColor="#1c8a31"
              fontSize="xl"
              align={"center"}
              borderRadius="8px 8px 0 0"
            >
              Dofus Touch Kamas
            </Text>
            <center>
              {" "}
              <Image src={touch} className="img" />
            </center>
          </Link>
          <Text
            backgroundColor="#1c8a31"
            fontSize="xl"
            align={"center"}
            borderRadius="0 0 8px 8px"
          >
            <Text as="b">Delivery time: </Text>5 minutes à 24 heures.
            <br />
            <Text as="b">Méthode de livraison: </Text>Astrub, face à face.
          </Text>
        </div>
        <div className="card">
          <Link href="dofus-retro-buy">
            <Text
              backgroundColor="#1c8a31"
              fontSize="xl"
              align={"center"}
              borderRadius="8px 8px 0 0"
            >
              Dofus Retro Kamas
            </Text>
            <center>
              {" "}
              <Image src={retro} className="img" />
            </center>
          </Link>
          <Text
            backgroundColor="#1c8a31"
            fontSize="xl"
            align={"center"}
            borderRadius="0 0 8px 8px"
          >
            <Text as="b">Delivery time: </Text>5 minutes à 24 heures.
            <br />
            <Text as="b">Méthode de livraison: </Text>Astrub, face à face.
          </Text>
        </div>
      </Flex>
    </div>
  );
};

export default Buy;
