import React from "react";
import QRCode from "react-qr-code";
import {
  Text,
  FormControl,
  FormLabel,
  Select,
  Input,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Center,
  Flex,
} from "@chakra-ui/react";

const OrderForm = (props) => {
  let {
    product,
    type,
    name,
    server,
    setServer,
    setName,
    methode,
    setMethode,
    price,
    amout,
    setAmout,
    handleSubmit,
    isOpen,
    onClose,
    details,
    isLoading,
    skrillemail,
    setSkrillemail,
  } = props;

  return (
    <div>
      <>
        <Text fontSize="2xl" as="b">
          {product?.name} ({type})
        </Text>
        <FormControl className="all">
          <FormControl className="left">
            <FormLabel>Server:</FormLabel>
            <Select
              value={server}
              onChange={(e) => setServer(e.target.value)}
              placeholder="Server..."
            >
              {product?.price?.map(({ server }, index) => (
                <option key={index} value={server}>
                  {server}
                </option>
              ))}
            </Select>
            <FormLabel>Character Name:</FormLabel>
            <Input
              value={name}
              onChange={(e) => setName(e.target.value)}
              type="text"
            />
            <FormLabel>Payment Method:</FormLabel>
            <Select
              value={methode}
              onChange={(e) => setMethode(e.target.value)}
              placeholder="Choose one..."
            >
              <option value="skrill">Skrill</option>
              <option value="usdt">Usdt (trc-20)</option>
            </Select>
            {methode === "skrill" ? (
              <>
                <FormLabel>Email (skrill)</FormLabel>
                <Input
                  type="text"
                  value={skrillemail}
                  onChange={(e) => setSkrillemail(e.target.value)}
                />
              </>
            ) : (
              ""
            )}
            <Text marginBlockStart="1em">
              Quantity (million, ps:10.3=10,300,000):
            </Text>
            <FormLabel>
              Kamas {price.toFixed(2)}
              {methode === "usdt" ? " usdt" : "$"}
            </FormLabel>
            <Input
              value={amout}
              onChange={(e) => {
                setAmout(e.target.value);
              }}
            />

            <Center mt="2vh">
              <Button
                type="submit"
                isLoading={isLoading}
                loadingText="Submitting"
                onClick={() => handleSubmit()}
              >
                Order
              </Button>
            </Center>
          </FormControl>
        </FormControl>
      </>
      <>
        <Modal isOpen={isOpen} size="lg" onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Usdt Payment</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <Center mb="5vh">
                <QRCode value={details?.pay_address} />
              </Center>
              <Flex>
                <Text as="b" mr="3px">
                  Payment id:
                </Text>
                <Text>{`${details?.payment_id}`}</Text>
              </Flex>
              <Flex>
                <Text as="b" mr="3px">
                  Payment Adress:
                </Text>
                <Text>{`${details?.pay_address}`}</Text>
              </Flex>
              <Flex>
                <Text as="b" mr="3px">
                  Payment amount:
                </Text>
                <Text> {`${details?.pay_amount}`} usdt</Text>
              </Flex>
            </ModalBody>
            <ModalFooter></ModalFooter>
          </ModalContent>
        </Modal>
      </>
    </div>
  );
};

export default OrderForm;
