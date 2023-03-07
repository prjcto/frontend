import React from "react";
import ProductsContext from "../../context/productsContext";
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
} from "@chakra-ui/react";

const Dashboard = () => {
  const { products } = React.useContext(ProductsContext);

  return (
    <div className="Dashboard">
      <Tabs
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
            <Flex justifyContent="center" gap="4">
              {products.map(({ name }, index) => (
                <>
                  <Card align="center">
                    <CardHeader>
                      <Heading size="md" key={index}>
                        {" "}
                        {name}
                      </Heading>
                    </CardHeader>
                    <CardBody>
                      <Image fallbackSrc="https://via.placeholder.com/150" />
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
            <p>Nunez DRAGAOOOO!</p>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </div>
  );
};

export default Dashboard;