import { Box } from "@chakra-ui/react";
import Indisponivel from "../components/Indisponivel";
import Template from "../components/Template";

export default function emitirCertificado() {

  return (
    <Template tituloPagina="Emitir Certificado">
      <Box minHeight="30vh">
        <Indisponivel />
      </Box>
    </Template>
  );
}
