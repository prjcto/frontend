import React from "react";
import ProductsContext from "../context/productsContext";
import {
  Box,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
} from "@chakra-ui/react";

const RateTable = ({ category }) => {
  const { products } = React.useContext(ProductsContext);

  return (
    <Box className="table" p="10px 10%">
      {products ? (
        <TableContainer id="info-table">
          <Table variant="simple">
            <Thead>
              <Tr>
                <Th>Servers</Th>
                <Th>Skrill</Th>
                <Th>CIH </Th>
                <Th>usdt</Th>
                <Th>Status</Th>
              </Tr>
            </Thead>
            {products
              .filter((item) => item.category === category)
              .map(({ price, status }, index) => (
                <Tbody key={index}>
                  {price.map((item, index2) => (
                    <Tr key={index2}>
                      <Td>{item.server}</Td>
                      <Td>{item.price_skrill}$/m</Td>
                      <Td>{item.price_cih}dh/m</Td>
                      <Td>{item.price_usdt} usdt/m</Td>
                      <Td>{item.status}</Td>
                    </Tr>
                  ))}
                </Tbody>
              ))}
          </Table>
        </TableContainer>
      ) : (
        <h1>loading</h1>
      )}
    </Box>
  );
};

export default RateTable;
