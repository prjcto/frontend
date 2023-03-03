import React, { useState } from "react";

import {
  Text,
  FormControl,
  FormLabel,
  Select,
  Input,
  Link,
} from "@chakra-ui/react";

const Dofus = () => {
  let [price, setPrice] = useState(0);

  const handleChange = (e) => {
    setPrice(e.target.value * 1000000);
  };

  return (
    <div className="Sell">
      <Text fontSize="2xl" as="b">
        DOFUS KAMAS
      </Text>
      <hr />
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
    </div>
  );
};

export default Dofus;
