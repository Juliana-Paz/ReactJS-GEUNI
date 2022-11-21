import { Box, Heading, Stack } from "@chakra-ui/react";
import { toEditorSettings } from "typescript";
import Footer from "../Footer";
import Navbar from "../Navbar";

export default function Template({ tituloPagina, children, isAdm=false }: any) {
  return (
    <>
      <Navbar isAdm={isAdm} />

      <Box width="100%" paddingX="28">
        <Heading
          textAlign="center"
          marginY="10"
          fontSize={"3xl"}
          fontFamily={"body"}
          fontWeight="500"
        >
          {tituloPagina}
        </Heading>
      </Box>

      <Stack width="100%" paddingX={[5, 10, 28]} alignItems="center">
        {children}
      </Stack>

      <Footer />
    </>
  );
}
