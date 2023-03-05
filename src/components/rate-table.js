import React from "react";
import ProductsContext from "../context/productsContext";
import {
  Box,
  Table,
  Thead,
  Tbody,
  TableCaption,
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
                <Th>PAYPAL</Th>
                <Th>usdt</Th>
                <Th>Status</Th>
              </Tr>
            </Thead>
            <Tbody>
              {products
                .filter((item) => item.category === category)
                .map(({ name, price }, index) => (
                  <>
                    <TableCaption>{name}</TableCaption>
                    {price.map((item, index2) => (
                      <Tr key={index2}>
                        <Td>{item.server}</Td>
                        <Td></Td>
                        <Td></Td>
                        <Td>{item.price_usdt}$/m</Td>
                        <Td>Available</Td>
                      </Tr>
                    ))}
                  </>
                ))}
            </Tbody>
          </Table>
        </TableContainer>
      ) : (
        <h1>loading</h1>
      )}
    </Box>
  );
};

export default RateTable;
