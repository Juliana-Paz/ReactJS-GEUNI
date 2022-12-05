import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel, Input,
  Radio,
  RadioGroup,
  Select,
  Stack,
  useDisclosure
} from "@chakra-ui/react";
import { useState } from "react";
import Indisponivel from "../components/Indisponivel";
import Template from "../components/Template";

export default function registrarFrequencia() {

  return (
    <Template tituloPagina="Registrar Frequência">
      <Box minHeight="30vh">
        <Indisponivel />
      </Box>
    </Template>
  );
}
