import React from "react";
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
        ) : order.payment_type === "usdt" ? (
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
          <Text>{`${customer.phone}`}</Text>
        </Flex>
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
