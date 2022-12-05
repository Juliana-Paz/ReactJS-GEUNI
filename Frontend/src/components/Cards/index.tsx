import {
  Button,
  Center,
  Heading,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import ModalInformacaoCard from "../ModalInformacaoCard";

export default function Card({ evento }: any) {
  return (
    <Center py={4}>
      <Stack
        borderWidth="1px"
        borderRadius="lg"
        w={{ sm: "100%", md: "540px" }}
        height={{ sm: "476px", md: "20rem" }}
        direction={{ base: "column", md: "row" }}
        bg={useColorModeValue("white", "gray.900")}
        boxShadow={"2xl"}
        padding={4}
      >
        <Stack
          flex={1}
          flexDirection="column"
          justifyContent="center"
          alignItems="start"
          p={1}
          pt={2}
        >
          <Heading fontSize={"2xl"} fontFamily={"body"}>
            {evento.nome}
          </Heading>
          <Stack spacing={0}>
            {/* <Text fontWeight={600} color={"gray.500"} size="sm">
              Período de Inscrição: {evento.peridoInscricao}
            </Text> */}
            <Text fontWeight={600} color={"gray.500"} size="sm">
              Período de Inscrição
            </Text>
            <Text fontWeight={600} color={"gray.500"} size="sm">
              {evento.periodoInscricao}
            </Text>
          </Stack>
          <Text
            textAlign={"justify"}
            color={useColorModeValue("gray.700", "gray.400")}
          >
            {evento.descricao}
          </Text>

          <Stack
            width={"100%"}
            mt={"2rem"}
            direction={"row"}
            padding={2}
            justifyContent={"space-between"}
            alignItems={"center"}
          >
            <ModalInformacaoCard
              evento={evento}
              w="100%"
              variant="outline"
              rounded={"full"}
              colorScheme={"blue"}
              shadow="lg"
            />
            <Button
              w="100%"
              rounded={"full"}
              colorScheme={"blue"}
              boxShadow={
                "0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)"
              }
              onClick={() => {
                window.open(`/formInscricao/?id=${evento.id}`);
              }}
            >
              Inscrever-se
            </Button>
          </Stack>
        </Stack>
      </Stack>
    </Center>
  );
}
