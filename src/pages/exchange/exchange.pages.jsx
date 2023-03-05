import React from "react";

import {
  Text,
  Image,
  FormControl,
  FormLabel,
  Select,
  Input,
} from "@chakra-ui/react";

import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";

import dofus from "../../assets/Dofus.png";
import touch from "../../assets/touch.png";
import retro from "../../assets/retro.png";

import "./exchange.styles.scss";

const Exchange = () => {
  return (
    <div className="Exchange">
      <Text fontSize="2xl" as="b">
        KAMAS EXCHANGE
      </Text>
      <hr />
      <div className="dofus-logos">
        <Image src={dofus} className="img-e" />
        <Image src={touch} className="img-e" />
        <Image src={retro} className="img-e" />
      </div>
      <FormControl isRequired>
        <FormLabel>Server you pay</FormLabel>
        <Select>
          <option value="Draconiros">Draconiros</option>
          <option value="HellMina">HellMina</option>
          <option value="Imagiro">Imagiro</option>
          <option value="Orukam">Orukam</option>
          <option value="TalKasha">TalKasha</option>
          <option value="Tylezia">Tylezia</option>
          <option value="Ombre(Shadow)">Ombre(Shadow)</option>
          <option value="Dodge">Brutas</option>
          <option value="Dodge">Dodge</option>
          <option value="Grandapan">Grandapan</option>
          <option value="Herdegrize">Herdegrize</option>
          <option value="Oshimo">Oshimo</option>
          <option value="Oshimo">Terra Cogita</option>
          <option value="Dodge">Crail</option>
          <option value="Grandapan">Boune</option>
          <option value="Herdegrize">Galgarion</option>
          <option value="Oshimo">Eratz</option>
          <option value="Herdegrize">Henual</option>
        </Select>
        <FormLabel>Quantity you pay(Million)</FormLabel>
        <Input type="text" placeholder="Quantity you pay(Million)" />
        <FormLabel>Character you pay</FormLabel>
        <Input placeholder="Character you pay" />
        <FormLabel>Server you receive</FormLabel>
        <Select>
          <option value="Draconiros">Draconiros</option>
          <option value="HellMina">HellMina</option>
          <option value="Imagiro">Imagiro</option>
          <option value="Orukam">Orukam</option>
          <option value="TalKasha">TalKasha</option>
          <option value="Tylezia">Tylezia</option>
          <option value="Ombre(Shadow)">Ombre(Shadow)</option>
          <option value="Dodge">Brutas</option>
          <option value="Dodge">Dodge</option>
          <option value="Grandapan">Grandapan</option>
          <option value="Herdegrize">Herdegrize</option>
          <option value="Oshimo">Oshimo</option>
          <option value="Oshimo">Terra Cogita</option>
          <option value="Dodge">Crail</option>
          <option value="Grandapan">Boune</option>
          <option value="Herdegrize">Galgarion</option>
          <option value="Oshimo">Eratz</option>
          <option value="Herdegrize">Henual</option>
        </Select>
        <FormLabel>Quantity you receive(Million)</FormLabel>
        <Input />
        <FormLabel>Character you receive</FormLabel>
        <Input placeholder="Character you receive" />
        <FormLabel>Code for exchange</FormLabel>
        <Input placeholder="Code for exchange" />
      </FormControl>
      <Text
        display="inline-flex"
        marginBlockStart="1em"
        color="green.500"
        className="note"
      >
        <FaCheckCircle /> We will send you private messages in-game with the
        exchange code you provide in order to confirm that the receiver who is
        exchanging with you is from our staff.
      </Text>
      <Text display="inline-flex" color="red.500" className="note">
        <FaTimesCircle />
        Warning: Do not tell anyone your Code. If someone gives you an incorrect
        Code, block it !!
      </Text>
    </div>
  );
};

export default Exchange;
