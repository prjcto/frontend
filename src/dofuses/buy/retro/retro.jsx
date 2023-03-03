import React, { useState } from "react";

import {
  Text,
  FormControl,
  FormLabel,
  Select,
  Input,
  Button,
} from "@chakra-ui/react";

const RetroB = () => {
  let [price, setPrice] = useState(0);

  const handleChange = (e) => {
    setPrice(e.target.value * 1000000);
  };

  return (
    <div className="Sell">
      <Text fontSize="2xl" as="b">
        DOFUS RETRO KAMAS
      </Text>
      <hr />
      <FormControl>
        <FormLabel>Server:</FormLabel>
        <Select placeholder="Server...">
          <option value="Dodge">Brutas</option>
          <option value="Dodge">Dodge</option>
          <option value="Grandapan">Grandapan</option>
          <option value="Herdegrize">Herdegrize</option>
          <option value="Oshimo">Oshimo</option>
          <option value="Oshimo">Terra Cogita</option>
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

export default RetroB;
