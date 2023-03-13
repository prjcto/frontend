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
  Select,
  Flex,
  Text,
  Box,
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
    setStatusChange,
  } = props;
  let [statusfilters, setStatusFilters] = React.useState();
  let [typefilters, setTypeFilters] = React.useState();
  const STATUS = ["pending", "waiting", "done"];

  const handlechange = (value, id) => {
    setStatus({ id: id, value: value });
    setStatusChange(true);
  };

  return (
    <>
      <Flex align="center">
        <Text as="b" fontSize="lg">
          Tier by
        </Text>
        <Box m="10px">
          <Select
            placeholder="--statuses--"
            onChange={(e) => setStatusFilters(e.target.value)}
          >
            {STATUS.map((item) => (
              <option value={item}>{item}</option>
            ))}
          </Select>
        </Box>
        <Box m="10px">
          <Select
            placeholder="--payment methodes--"
            onChange={(e) => setTypeFilters(e.target.value)}
          >
            <option value="cih">Cih bank </option>
            <option value="usdt">Usdt trc-20 </option>
            <option value="skrill">Skrill</option>
          </Select>
        </Box>
      </Flex>
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
              <Th>Code</Th>
            </Tr>
          </Thead>
          {orders.length ? (
            <Tbody>
              {orders
                ?.filter((order) =>
                  statusfilters ? order.status === statusfilters : order
                )
                ?.filter((order) =>
                  typefilters ? order.payment_type === typefilters : order
                )
                .map((order, index) =>
                  order.code ? (
                    <Tr key={index}>
                      <Td>
                        {order.youpay.server} to {order.youreceive.server}{" "}
                        (exchange)
                      </Td>
                      <Td>
                        Pay {order.youpay.quantity}m Receive{" "}
                        {order.youreceive.quantity}m
                      </Td>
                      <Td>
                        {order.youpay.character} to {order.youreceive.character}
                      </Td>
                      <Td>
                        <Badge>none</Badge>
                      </Td>
                      <Td>
                        <Select
                          onChange={(e) =>
                            handlechange(e.target.value, order._id)
                          }
                          placeholder={order.status}
                        >
                          {STATUS.map(
                            (item) =>
                              item !== order.status && (
                                <option value={item}>
                                  {item !== order.status && item}
                                </option>
                              )
                          )}
                        </Select>
                      </Td>
                      <Td></Td>
                      <Td>{order.code}</Td>
                    </Tr>
                  ) : (
                    <Tr key={index}>
                      <CustomerModal
                        customer={order.customer}
                        order={morder}
                        isOpen={isOpen}
                        onClose={onClose}
                      />
                      <Td>
                        {order.server} ({order.product.category})
                      </Td>
                      <Td>
                        {order.payment_type === "usdt"
                          ? `${order?.price?.toFixed(2)} usdt`
                          : `${order?.price?.toFixed(2)}dh`}{" "}
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
                              : order.payment_type === "cih"
                              ? "red"
                              : ""
                          }
                        >
                          {order.payment_type}
                        </Badge>
                      </Td>
                      <Td>
                        <Select
                          onChange={(e) =>
                            handlechange(e.target.value, order._id)
                          }
                          placeholder={order.status}
                        >
                          {STATUS.map(
                            (item) =>
                              item !== order.status && (
                                <option value={item}>
                                  {item !== order.status && item}
                                </option>
                              )
                          )}
                        </Select>
                      </Td>
                      <Td>
                        {order.payment_type === "usdt" &&
                        order.product.category === "buy" ? (
                          status.index === index ? (
                            status.status
                          ) : (
                            <Button
                              colorScheme="yellow"
                              onClick={() =>
                                getStatus({ order, index, setStatus })
                              }
                            >
                              Get
                            </Button>
                          )
                        ) : (
                          ""
                        )}
                      </Td>
                      <Td>none</Td>
                    </Tr>
                  )
                )}
            </Tbody>
          ) : (
            <TableCaption>There is no orders yet.</TableCaption>
          )}
        </Table>
      </TableContainer>
    </>
  );
};

export default DashboardOrder;
