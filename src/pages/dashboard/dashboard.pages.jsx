import React from "react";
import ProductsContext from "../../context/productsContext";
import getOrders, { getStatus } from "../../actions/order/getorders";
import editOrder from "../../actions/order/edit_order";
import DashboardOrder from "../../components/dashboard-order";
import ProductsModal from "../../components/products-modal";
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
  Grid,
  useDisclosure,
  useToast,
} from "@chakra-ui/react";
import dofus from "../../assets/Dofus.png";
import touch from "../../assets/touch.png";
import retro from "../../assets/retro.png";

const Dashboard = () => {
  const { products } = React.useContext(ProductsContext);
  const toast = useToast();
  const [orders, setOrders] = React.useState([]);
  const [status, setStatus] = React.useState({});
  const [morder, setMorder] = React.useState({});
  const [product, setProduct] = React.useState({
    price: [],
  });
  const [modal, setModal] = React.useState(false);
  const [statusChange, setStatusChange] = React.useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();

  React.useEffect(() => getOrders({ setOrders }), []);

  React.useEffect(() => {
    let { id, value } = status;

    if (statusChange) {
      let newStatus = [{ propName: "status", value: value }];
      editOrder({ id, newStatus, toast });
      setStatusChange(false);
    }
  }, [statusChange, toast, status]);

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
            <ProductsModal
              product={product}
              isOpen={modal}
              onClose={() => setModal(false)}
              toast={toast}
            />
            <Grid
              mt="8vh"
              templateColumns="repeat(3, 1fr)"
              placeItems={"center"}
              gap={16}
            >
              {products?.map((item, index) => (
                <>
                  <Card key={index} align="center" w="35vh">
                    <CardHeader>
                      <Heading size="md" key={index}>
                        {" "}
                        {item.name} ({item.category})
                      </Heading>
                    </CardHeader>
                    <CardBody>
                      <Image
                        w="35vh"
                        borderRadius="lg"
                        src={
                          item.name === "Dofus Kamas"
                            ? dofus
                            : item.name === "Dofus Retro"
                            ? retro
                            : item.name === "Dofus Touch"
                            ? touch
                            : ""
                        }
                      />
                    </CardBody>
                    <CardFooter>
                      <Button
                        colorScheme={"yellow"}
                        onClick={() => {
                          setProduct(item);
                          setModal(true);
                        }}
                      >
                        Edit
                      </Button>
                    </CardFooter>
                  </Card>
                </>
              ))}
            </Grid>
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
              setStatusChange={setStatusChange}
            />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </div>
  );
};

export default Dashboard;
