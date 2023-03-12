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
  let [filters, setFilters] = React.useState();
  const STATUS = ["pending", "waiting", "done"];

  const handlechange = (value, id) => {
    setStatus({ id: id, value: value });
    setStatusChange(true);
  };

  return (
    <>
      <Select
        placeholder="Choose a filter.."
        onChange={(e) => setFilters(e.target.value)}
      >
        {STATUS.map((item) => (
          <option value={item}>{item}</option>
        ))}
      </Select>
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
              {orders
                ?.filter((order) =>
                  filters ? order.status === filters : order
                )
                .map((order, index) => (
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
                  </Tr>
                ))}
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
