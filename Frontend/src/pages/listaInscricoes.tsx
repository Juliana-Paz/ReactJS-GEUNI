import {
  Box
} from "@chakra-ui/react";
import Indisponivel from "../components/Indisponivel";
import Template from "../components/Template";

export default function listaInscricoes() {
  return (
    <Template tituloPagina="Lista de Inscrições" isAdm={true}>
      <Box minHeight="30vh">
        <Indisponivel />
      </Box>
    </Template>
  );
}
