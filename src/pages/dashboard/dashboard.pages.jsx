import React from "react";
import ProductsContext from "../../context/productsContext";
import getOrders, { getStatus } from "../../actions/order/getorders";
import DashboardOrder from "../../components/dashboard-order";
import {
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Heading,
  Image,
  Flex,
  useDisclosure,
} from "@chakra-ui/react";

const Dashboard = () => {
  const { products } = React.useContext(ProductsContext);
  const [orders, setOrders] = React.useState([]);
  const [status, setStatus] = React.useState({});
  const [morder, setMorder] = React.useState({});
  const { isOpen, onOpen, onClose } = useDisclosure();

  React.useEffect(() => getOrders({ setOrders }), []);

  return (
    <div className="Dashboard">
      <Tabs
        mt="5vh"
        variant="soft-rounded"
        colorScheme="yellow"
        align="center"
        padding="10px"
      >
        <TabList>
          <Tab>Products</Tab>
          <Tab>Orders</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <Flex mt="8vh" justifyContent="center" gap="16">
              {products?.map(({ name }, index) => (
                <>
                  <Card key={index} align="center" w="35vh">
                    <CardHeader>
                      <Heading size="md" key={index}>
                        {" "}
                        {name}
                      </Heading>
                    </CardHeader>
                    <CardBody>
                      <Image
                        w="35vh"
                        borderRadius="lg"
                        fallbackSrc="https://via.placeholder.com/150"
                      />
                    </CardBody>
                    <CardFooter>
                      <Button colorScheme={"yellow"}>Edit</Button>
                    </CardFooter>
                  </Card>
                </>
              ))}
            </Flex>
          </TabPanel>
          <TabPanel>
            <DashboardOrder
              orders={orders}
              morder={morder}
              isOpen={isOpen}
              onOpen={onOpen}
              onClose={onClose}
              setMorder={setMorder}
              status={status}
              setStatus={setStatus}
              getStatus={getStatus}
            />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </div>
  );
};

export default Dashboard;
