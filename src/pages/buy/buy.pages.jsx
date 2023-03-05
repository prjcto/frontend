import React from "react";
import { Text, Link, Image } from "@chakra-ui/react";

import dofus from "../../assets/Dofus.png";
import touch from "../../assets/touch.png";
import retro from "../../assets/retro.png";

import "./buy.styles.scss";

const Buy = () => {
  return (
    <div className="Buy">
      

      


        <div className="card">
          <Link href="dofus-buy" >
            
            <center>
              {" "}
              <Image src={dofus} className="img" />
            </center>
          
          <Text 
          fontSize="xl"
          as="b"
          >
            Méthode de livraison: Astrub, face à face
          </Text>
          </Link>
        </div>

        


        <div className="card">
          <Link href="dofus-touch-buy">
            
            <center>
              {" "}
              <Image src={touch} className="img" />
            </center>
          
          <Text
          fontSize="xl"
          as="b"
          >
            Méthode de livraison: Astrub, face à face
          </Text>
          </Link>
        </div>




        <div className="card">
          <Link href="dofus-retro-buy" >
            
            <center>
              {" "}
              <Image src={retro} className="img" />
            </center>
          
          
          <Text 
          fontSize="xl"
          as="b"
          >
            Méthode de livraison: <Text>Astrub, face à face</Text>
          </Text>
          </Link>

        </div>




      
    </div>
  );
};

export default Buy;
