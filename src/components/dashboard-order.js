import React from "react";
import CustomerModal from "./customer-modal";
import {
  Button,
  Table,
  Thead,
  Tbody,
  Badge,
  Tr,
  Th,
  Td,
  TableContainer,
  TableCaption,
} from "@chakra-ui/react";

const DashboardOrder = (props) => {
  let {
    orders,
    morder,
    isOpen,
    onClose,
    setMorder,
    status,
    getStatus,
    setStatus,
    onOpen,
  } = props;

  return (
    <TableContainer>
      <Table variant="simple">
        <Thead>
          <Tr>
            <Th>Server</Th>
            <Th>Price</Th>
            <Th>In-game name</Th>
            <Th>Payment methode</Th>
            <Th>Status</Th>
            <Th>Status (usdt)</Th>
          </Tr>
        </Thead>
        {orders.length ? (
          <Tbody>
            {orders?.map((order, index) => (
              <Tr key={index}>
                <CustomerModal
                  customer={order.customer}
                  order={morder}
                  isOpen={isOpen}
                  onClose={onClose}
                />
                <Td>{order.server}</Td>
                <Td>
                  {order.payment_type === "usdt"
                    ? `${order.price.toFixed(2)} usdt`
                    : `${order.price.toFixed(2)}dh`}{" "}
                  ({order.amount})
                </Td>
                <Td>
                  <span
                    style={{ cursor: "pointer" }}
                    onClick={() => {
                      setMorder(order);
                      onOpen();
                    }}
                  >
                    {order.ingame_name}
                  </span>
                </Td>
                <Td>
                  <Badge
                    colorScheme={
                      order.payment_type === "usdt"
                        ? "green"
                        : order.payment_type === "skrill"
                        ? "purple"
                        : ""
                    }
                  >
                    {order.payment_type}
                  </Badge>
                </Td>
                <Td>{order.status}</Td>
                <Td>
                  {order.payment_type === "usdt" ? (
                    status.index === index ? (
                      status.status
                    ) : (
                      <Button
                        colorScheme="yellow"
                        onClick={() => getStatus({ order, index, setStatus })}
                      >
                        Get
                      </Button>
                    )
                  ) : (
                    ""
                  )}
                </Td>
              </Tr>
            ))}
          </Tbody>
        ) : (
          <TableCaption>There is no orders yet.</TableCaption>
        )}
      </Table>
    </TableContainer>
  );
};

export default DashboardOrder;
