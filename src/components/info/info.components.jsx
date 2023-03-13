import React from "react";
import {BsLightningFill} from "react-icons/bs";
import {Ri24HoursLine} from "react-icons/ri";
import {BsCurrencyExchange} from "react-icons/bs";
import {CgArrowsExchangeAlt} from "react-icons/cg";
import { Heading,SimpleGrid, Box } from "@chakra-ui/react";
import "./info.styles.scss";

const Info = () => {
  return (
    <div className="Info">
      <div className="infos">

        <SimpleGrid id="S-grid" >
          <Box className="box">
            {" "}
            <div className="info-container">
              <CgArrowsExchangeAlt  id="Ic"/>
              <Box>
                <Heading id="Fs" size="md"> BEST EXCHANGE RATE</Heading>
                
              </Box>
            </div>
          </Box>


          <Box className="box">
            {" "}
            <div className="info-container">
              <BsLightningFill  id="Ic"/>
              <Box  alignItems="center">
                <Heading id="Fs" size="md">FAST PAYOUT</Heading>
                
              </Box>
            </div>
          </Box>

          
          <Box className="box">
            {" "}
            <div className="info-container">
              <Ri24HoursLine id="Ic" />
              <Box>
                <Heading id="Fs" size="md">24/7 LIVE SUPPORT</Heading>
                
              </Box>
            </div>
          </Box>
              <Box className="box">
            <div className="info-container">
              <BsCurrencyExchange  id="Ic"/>
              <Box>
                <Heading id="Fs" size="md">MULTIPLE PAYOUT METHODS</Heading>
              </Box>
            </div>
          </Box>
        </SimpleGrid>
      </div>
    </div>
  );
};

export default Info;
