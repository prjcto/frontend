import React from "react";
import {BsLightningFill} from "react-icons/bs";
import {Ri24HoursLine} from "react-icons/ri";
import {BsCurrencyExchange} from "react-icons/bs";
import {CgArrowsExchangeAlt} from "react-icons/cg";
import { Heading,SimpleGrid, Box } from "@chakra-ui/react";
import {Table,Thead,Tbody,TableCaption,Tr,Th,Td,TableContainer,} from '@chakra-ui/react';
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


      <div className="table">
          
          <TableContainer id="info-table">
            
              <Table variant='simple'>
                    <Thead>
                      <Tr>
                        <Th>Servers</Th>
                        <Th>Skrill</Th>
                        <Th>PAYPAL</Th>
                        <Th>usdt</Th>
                        <Th>Status</Th>
                      </Tr>
                      <TableCaption className="CP">Dofus Kamas  </TableCaption>
                    </Thead>
                    
                    <Tbody>
                      <Tr>
                        <Td>Draconiros</Td>
                        <Td>2.85€/M</Td>
                        <Td>2.85€/M</Td>
                        <Td>2.85€/M</Td>
                        <Td >Sourcing</Td>
                      </Tr>
                      <Tr>
                        <Td>HellMina</Td>
                        <Td>2.85€/M</Td>
                        <Td>2.85€/M</Td>
                        <Td>2.85€/M</Td>
                        <Td >Sourcing</Td>
                      </Tr>
                      <Tr>
                        <Td>Imagiro</Td>
                        <Td>2.85€/M</Td>
                        <Td>2.85€/M</Td>
                        <Td>2.85€/M</Td>
                        <Td>Sourcing</Td>
                      </Tr>
                      <Tr>
                        <Td >Orukam	</Td>
                        <Td>2.85€/M</Td>
                        <Td>2.85€/M</Td>
                        <Td>2.85€/M</Td>
                        <Td>Sourcing</Td>
                      </Tr>
                      <Tr>
                        <Td >TalKasha	</Td>
                        <Td>2.85€/M</Td>
                        <Td>2.85€/M</Td>
                        <Td>2.85€/M</Td>
                        <Td>Sourcing</Td>
                      </Tr>
                      <Tr>
                        <Td >Tylezia	</Td>
                        <Td>2.85€/M</Td>
                        <Td>2.85€/M</Td>
                        <Td>2.85€/M</Td>
                        <Td>Sourcing</Td>
                      </Tr>
                      <Tr>
                        <Td >Ombre-Shadow</Td>
                        <Td>2.85€/M</Td>
                        <Td>2.85€/M</Td>
                        <Td>2.85€/M</Td>
                        <Td>Sourcing</Td>
                      </Tr>
                    </Tbody>
                  </Table>

                  <Table variant='simple'>
                    
                    <Tbody>
                    <TableCaption align="center">Dofus touch kamas</TableCaption>

                      <Tr>
                        <Td>Brutas</Td>
                        <Td>2.85€/M</Td>
                        <Td>2.85€/M</Td>
                        <Td>2.85€/M</Td>
                        <Td >Sourcing</Td>
                      </Tr>
                      <Tr>
                        <Td>Dodge</Td>
                        <Td>2.85€/M</Td>
                        <Td>2.85€/M</Td>
                        <Td>2.85€/M</Td>
                        <Td >Sourcing</Td>
                      </Tr>
                      <Tr>
                        <Td>Grandapan</Td>
                        <Td>2.85€/M</Td>
                        <Td>Sourcing</Td>
                      </Tr>
                      <Tr>
                        <Td >Oshimo	</Td>
                        <Td>2.85€/M</Td>
                        <Td>2.85€/M</Td>
                        <Td>2.85€/M</Td>
                        <Td>Sourcing</Td>
                      </Tr>
                      <Tr>
                        <Td >Terra Cogita		</Td>
                        <Td>2.85€/M</Td>
                        <Td>2.85€/M</Td>
                        <Td>2.85€/M</Td>
                        <Td>Sourcing</Td>
                      </Tr>
                    </Tbody>
                  </Table>


                  <Table variant='simple'>
                   <Tbody>
                    <TableCaption className="CP">Dofus retro Kamas</TableCaption>

                      <Tr>
                        <Td>Crail</Td>
                        <Td>2.85€/M</Td>
                        <Td>2.85€/M</Td>
                        <Td>2.85€/M</Td>
                        <Td >Sourcing</Td>
                      </Tr>
                      <Tr>
                        <Td>Boune</Td>
                        <Td>2.85€/M</Td>
                        <Td>2.85€/M</Td>
                        <Td>2.85€/M</Td>
                        <Td >Sourcing</Td>
                      </Tr>
                      <Tr>
                        <Td>Galgarion</Td>
                        <Td>2.85€/M</Td>
                        <Td>2.85€/M</Td>
                        <Td>2.85€/M</Td>
                        <Td>Sourcing</Td>
                      </Tr>
                      <Tr>
                        <Td >Eratz	</Td>
                        <Td>2.85€/M</Td>
                        <Td>2.85€/M</Td>
                        <Td>2.85€/M</Td>
                        <Td>Sourcing</Td>
                      </Tr>
                      <Tr>
                        <Td>Henual</Td>
                        <Td>2.85€/M</Td>
                        <Td>2.85€/M</Td>
                        <Td>2.85€/M</Td>
                        <Td>Sourcing</Td>
                      </Tr>
                    </Tbody>
                  </Table>
        </TableContainer>
      </div>



      <div className="footer">
        <hr />
        <p>Copyright © 2023. All Rights Reserved.</p>
      </div>
    </div>
  );
};

export default Info;
