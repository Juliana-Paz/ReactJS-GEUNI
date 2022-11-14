import { Box, Heading, Stack } from "@chakra-ui/react";
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
        >
          {tituloPagina}
        </Heading>
      </Box>

      <Stack width="100%" paddingX={28} alignItems="center">
        {children}
      </Stack>

      <Footer />
    </>
  );
}
