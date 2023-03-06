import React, { useState } from "react";
import RateTable from "../../components/rate-table";
import {
  Text,
  FormControl,
  FormLabel,
  Select,
  Input,
  Link,
} from "@chakra-ui/react";
import "./sell.styles.scss";

const Sell = () => {
  let [price, setPrice] = useState(0);

  const handleChange = (e) => {
    setPrice(e.target.value * 1000000);
  };

  return (
    <div className="Sell">
      <Text fontSize="2xl" as="b">
        SELL YOUR KAMAS
      </Text>
      <hr />
      <Text marginBlockStart="1em" marginBlockEnd="1em">
        Sell Dofus Kamas at the best price. do not hesitate to contact us if you
        want to sell your Kamas.
      </Text>
      <Text marginBlockStart="1em" marginBlockEnd="1em">
        Quantity: 20 EUR minimum value in Kamas (Bitcoin, Usdt, Bank transfer.).
      </Text>
      <Text marginBlockStart="1em" marginBlockEnd="1em">
        All of your delivered registered on the same payout account transactions
        will be combined and sent as a single payment.
      </Text>
      <Text marginBlockStart="1em" marginBlockEnd="1em">
        Payment methods:
      </Text>
      <Text marginBlockStart="1em" marginBlockEnd="1em">
        Bitcoin: Payment between 6 to 24 hours after delivery of the Kamas.
      </Text>
      <Text marginBlockStart="1em" marginBlockEnd="1em">
        Usdt: Payment between 6 to 24 hours after delivery of the Kamas.(TRC20
        Only!!! fees: 1 usdt/transaction)
      </Text>
      <Text marginBlockStart="1em" marginBlockEnd="1em">
        National bank transfer and WafaCash[Morocco]. Payment sent within 24
        hours after delivery of the Kamas(minimum value of 300 Dhs of Kamas)
      </Text>
      <Text marginBlockStart="1em" marginBlockEnd="1em">
        You get automatically a bonus of 50 Dhs on each order delivered over
        3000 Dhs
      </Text>
      <Text
        fontSize="xl"
        marginBlockStart="2em"
        marginBlockEnd="0.5em"
        align={"center"}
      >
        <Link href="login" color={"blue.400"}>
          Login
        </Link>{" "}
        first before place order
      </Text>


      
      <FormControl className="all">
        <FormControl className="left">
          <FormLabel>Server:</FormLabel>
          <Select placeholder="Server...">
            <option value="Draconiros">Draconiros</option>
            <option value="HellMina">HellMina</option>
            <option value="Imagiro">Imagiro</option>
            <option value="Orukam">Orukam</option>
            <option value="TalKasha">TalKasha</option>
            <option value="Tylezia">Tylezia</option>
            <option value="Ombre(Shadow)">Ombre(Shadow)</option>
            <option value="Dodge">Dodge</option>
            <option value="Grandapan">Grandapan</option>
            <option value="Herdegrize">Herdegrize</option>
            <option value="Oshimo">Oshimo</option>
            <option value="Crail">Crail</option>
            <option value="Boune">Boune</option>
            <option value="Galgarion">Galgarion</option>
            <option value="Eratz">Eratz</option>
            <option value="Pandora-wakfu">Pandora-wakfu</option>
          </Select>
          <FormLabel>Character Name:</FormLabel>
          <Input placeholder="Character Name" />
          <FormLabel>Payment Method:</FormLabel>
          <Select placeholder="Payment Method...">
            <option value="CIH-banque">CIH-banque</option>
            <option value="Wafacash">Wafacash</option>
            <option value="BMCE-banque">BMCE-banque</option>
            <option value="Attijari-banque">Attijari-banque</option>
            <option value="BitCoin">BitCoin</option>
            <option value="Usdt">Usdt</option>
          </Select>
          <Text marginBlockStart="1em">
            Quantity (million, ps:10.3=10,300,000):
          </Text>
          <FormLabel>{price} Kamas</FormLabel>
          <Input
            onChange={handleChange}
            type="number"
            placeholder="Quantity (million, ps:10.3=10,300,000):"
          />
        </FormControl>
        <FormControl className="right">
          <FormLabel>Contact Email Address:</FormLabel>
          <Input placeholder="Contact Email Address" />
          <FormLabel>Full Name</FormLabel>
          <Input placeholder="Full Name" />
          <FormLabel>Bank Account</FormLabel>
          <Input placeholder="Account" />
          <FormLabel>Comment</FormLabel>
          <Input placeholder="Comment" />
        </FormControl>
      </FormControl>
      <RateTable category="sell" />
    </div>
  );
};

export default Sell;
