/* eslint-disable react-hooks/rules-of-hooks */
import { Button, Divider, Flex, Stack, Text, useToast } from "@chakra-ui/react";
import ModalSolicitacao from "../components/ModalSolicitacao";
import Template from "../components/Template";
import { EVENTOS } from "../mock/eventos";

export default function listaSolicitacoes() {
  const toast = useToast();

  const negarSolicitacao = (id: any) => {
    console.log(id);
    toast({
      title: "Solicitação Negada.",
      description: "A solicitação do evento foi negada.",
      status: "success",
      duration: 3000,
      isClosable: true,
      variant: "left-accent",
      position: "top-right",
    });
  };

  const aprovarSolicitacao = (id: any) => {
    console.log(id);
    toast({
      title: "Solicitação Aprovada",
      description: "A solicitação do evento foi aprovada.",
      status: "success",
      duration: 3000,
      isClosable: true,
      variant: "left-accent",
      position: "top-right",
    });
  };

  return (
    <Template tituloPagina="Lista de Solicitações" isAdm={true}>
      <Flex
        display="column"
        backgroundColor="gray.50"
        padding="16"
        shadow="md"
        width="70%"
      >

        <Stack spacing={4}>
          {EVENTOS.map((evento, key) => {
            return (
              <>
                <Flex justifyContent="space-between" key={key}>
                  <Text w="70%" fontWeight={600}>{evento.nome}</Text>
                  <Flex w="30%" gap="0">
                    <ModalSolicitacao evento={evento} />
                    <Button
                      colorScheme="red"
                      size="xs"
                      rounded="none"
                      onClick={() => negarSolicitacao(evento.id)}
                    >
                      Negar
                    </Button>
                    <Button
                      colorScheme="green"
                      size="xs"
                      roundedLeft="none"
                      onClick={() => {
                        aprovarSolicitacao(evento.id);
                      }}
                    >
                      Aceitar
                    </Button>
                  </Flex>
                </Flex>
                <Divider />
              </>
            );
          })}
        </Stack>
      </Flex>
    </Template>
  );
}
