import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Stack,
} from "@chakra-ui/react";
import Footer from "../components/Footer";

export default function Inscricao() {
  return (
    <>
      <Stack width="100%" paddingX={28} paddingY={100} alignItems="center">
        <Stack backgroundColor="gray.50" padding="16" shadow="md" width="40%">
          <Heading>Login</Heading>
          <FormControl>
            <FormLabel>Login</FormLabel>
            <Input type="email" />
          </FormControl>
          <FormControl>
            <FormLabel>Senha</FormLabel>
            <Input type="password" />
          </FormControl>

          <Box paddingY="10">
            <Button
              colorScheme={"blue"}
              size="md"
              width="100%"
              onClick={() => {
                window.open("/listaSolicitacoes", "_self");
              }}
            >
              Logar
            </Button>
          </Box>
        </Stack>
      </Stack>
      <Footer />
    </>
  );
}
