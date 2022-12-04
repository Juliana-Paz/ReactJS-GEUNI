import { Alert, AlertDescription, AlertIcon, AlertTitle, Box } from "@chakra-ui/react";

export default function Indisponivel() {
  return (
    <>
      <Box>
        <Alert
          status="error"
          variant="subtle"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          textAlign="center"
          height="225px"
          width="450px"
        >
          <AlertIcon boxSize="40px" mr={0} />
          <AlertTitle mt={4} mb={1} fontSize="lg">
            Disponível em Breve!
          </AlertTitle>
          <AlertDescription maxWidth="sm">
            Ainda estamos trabalhando no desenvolvimento dessa funcionalidade, mas já já está no ar. Obrigado pela compreensão!
          </AlertDescription>
        </Alert>
      </Box>
    </>
  );
}
