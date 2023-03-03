import React, { useState } from "react";

import {
  Text,
  FormControl,
  FormLabel,
  Select,
  Input,
  Button,
} from "@chakra-ui/react";

const DofusB = () => {
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
      <FormControl>
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
        <Text marginBlockStart="1em">
          Quantity (million, ps:10.3=10,300,000):
        </Text>
        <FormLabel>{price} Kamas</FormLabel>
        <Input
          onChange={handleChange}
          placeholder="Quantity (million, ps:10.3=10,300,000):"
        />
        <FormLabel>Amount</FormLabel>
        <Input placeholder="Amount" />
      </FormControl>
      <Button colorScheme="blue">Buy</Button>
    </div>
  );
};

export default DofusB;
