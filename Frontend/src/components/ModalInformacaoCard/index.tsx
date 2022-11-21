import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
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

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{evento.nome}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>Período de Inscrição: {evento.peridoInscricao}</ModalBody>
          <ModalBody>Descrição: {evento.descricao}</ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
