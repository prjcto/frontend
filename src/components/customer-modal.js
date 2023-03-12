import React from "react";
import QRCode from "react-qr-code";
import {
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Text,
  Flex,
  Center,
} from "@chakra-ui/react";

const CustomerModal = ({ customer, order, isOpen, onClose }) => (
  <Modal isOpen={isOpen} onClose={onClose}>
    <ModalOverlay />
    <ModalContent>
      <ModalHeader>Customer's information</ModalHeader>
      <ModalCloseButton />
      <ModalBody>
        <Flex>
          <Text as="b" mr="3px">
            Firstname:
          </Text>
          <Text>{`${customer.firstname}`}</Text>
        </Flex>
        <Flex>
          <Text as="b" mr="3px">
            Lastname:
          </Text>
          <Text>{`${customer.lastname}`}</Text>
        </Flex>
        {order.payment_type === "skrill" &&
        customer.email === order.payment_details.skrill_email ? (
          <Flex>
            <Text as="b" mr="3px">
              Email:
            </Text>
            <Text>{`${customer.email}`}</Text>
          </Flex>
        ) : order.payment_type === "usdt" || order.payment_type === "cih" ? (
          <Flex>
            <Text as="b" mr="3px">
              Email:
            </Text>
            <Text>{`${customer.email}`}</Text>
          </Flex>
        ) : (
          <Flex>
            <Text as="b" mr="3px">
              Email:
            </Text>
            <Text>{`${order?.payment_details?.skrill_email}`}</Text>
          </Flex>
        )}
        <Flex>
          <Text as="b" mr="3px">
            Phone number:
          </Text>
          <Text>{customer.phone}</Text>
        </Flex>
        {order.payment_type === "cih" && order.product.category === "sell" ? (
          <>
            <Flex>
              <Text as="b" mr="3px">
                Fullname: (cih)
              </Text>
              <Text>{order?.payment_details?.cih_fullname}</Text>
            </Flex>
            <Flex>
              <Text as="b" mr="3px">
                Full rib: (cih)
              </Text>
              <Text>{order?.payment_details?.cih_rib}</Text>
            </Flex>
          </>
        ) : null}
        {order.payment_type === "usdt" && order.product.category === "sell" ? (
          <>
            <Flex>
              <Text as="b" mr="3px">
                Address:
              </Text>
              <Text>{`${order?.payment_details?.usdt_address}`}</Text>
            </Flex>
            <Center mt="5vh" mb="2vh">
              <QRCode value={order?.payment_details?.usdt_address} />
            </Center>
          </>
        ) : null}
      </ModalBody>

      <ModalFooter>
        <Button colorScheme="blue" mr={3} onClick={onClose}>
          Close
        </Button>
      </ModalFooter>
    </ModalContent>
  </Modal>
);

export default CustomerModal;
