import {
  Box,
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  SimpleGrid,
  Stack,
  Text,
  useDisclosure,
} from "@chakra-ui/react";

export default function ModalInformacaoCard({ evento }: any) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Button
        w="100%"
        variant="outline"
        rounded={"full"}
        colorScheme={"blue"}
        shadow="lg"
        onClick={onOpen}
      >
        Informações
      </Button>

      <Modal
        isOpen={isOpen}
        onClose={onClose}
        isCentered
        scrollBehavior="inside"
        size="lg"
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{evento.nome}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Stack spacing={4}>
              <SimpleGrid minChildWidth="140px" spacing="15px">
                <Box>
                  <Text fontWeight={600} color={"gray.700"} size="sm">
                    Período de Inscrição
                  </Text>
                  <Text>{evento.periodoInscricao}</Text>
                </Box>
                <Box>
                  <Text fontWeight={600} color={"gray.700"} size="sm">
                    Período de Realização
                  </Text>
                  <Text>{evento.periodoRealizacao}</Text>
                </Box>
                <Box>
                  <Text fontWeight={600} color={"gray.700"} size="sm">
                    Quantidade de Vagas
                  </Text>
                  <Text>{evento.quantidadeVagas}</Text>
                </Box>
                <Box>
                  <Text fontWeight={600} color={"gray.700"} size="sm">
                    Público Alvo
                  </Text>
                  <Text>{evento.publicoAlvo}</Text>
                </Box>
                <Box>
                  <Text fontWeight={600} color={"gray.700"} size="sm">
                    Carga Horária
                  </Text>
                  <Text>{evento.cargaHoraria}</Text>
                </Box>
                <Box>
                  <Text fontWeight={600} color={"gray.700"} size="sm">
                    Possui Certificação?
                  </Text>
                  <Text>{evento.certificacao}</Text>
                </Box>
              </SimpleGrid>
                <Box>
                  <Text fontWeight={600} color={"gray.700"} size="sm">
                    Objetivo Geral do Evento
                  </Text>
                  <Text>{evento.objetivoGeral}</Text>
                </Box>
                <Box>
                  <Text fontWeight={600} color={"gray.700"} size="sm">
                    Descrição
                  </Text>
                  <Text>{evento.descricao}</Text>
                </Box>
            </Stack>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" onClick={onClose}>
              Fechar
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
