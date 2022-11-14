import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  Radio,
  RadioGroup,
  Select,
  Stack,
  Textarea,
} from "@chakra-ui/react";
import Template from "../components/Template";

export default function Solicitacao() {
  return (
    <Template tituloPagina="Solicitar Evento">
      <Stack backgroundColor="gray.50" padding="16" shadow="md" width="70%">
        <FormControl>
          <FormLabel>Modalidade</FormLabel>
          <Select>
            <option></option>
            <option>Presencial</option>
            <option>EAD</option>
            <option>Híbrido</option>
          </Select>
        </FormControl>
        <FormControl>
          <FormLabel>Nome do Evento</FormLabel>
          <Input />
        </FormControl>
        <FormControl>
          <FormLabel>Descrição do Evento</FormLabel>
          <Textarea
            borderColor="gray.300"
            _hover={{
              borderRadius: "gray.300",
            }}
          />
        </FormControl>
        <FormControl>
          <FormLabel>Objetivo Geral</FormLabel>
          <Input />
        </FormControl>
        <FormControl>
          <FormLabel>Público-Alvo</FormLabel>
          <Input />
        </FormControl>
        <FormControl>
          <FormLabel>Data de Inicio do Evento</FormLabel>
          <Input type="date" />
        </FormControl>
        <FormControl>
          <FormLabel>Data de Finalização do Evento</FormLabel>
          <Input type="date" />
        </FormControl>
        <FormControl>
          <FormLabel>Data de Inicio de Início das Inscrições</FormLabel>
          <Input type="date" />
        </FormControl>
        <FormControl>
          <FormLabel>Data de Final das Inscrições </FormLabel>
          <Input type="date" />
        </FormControl>
        <FormControl>
          <FormLabel>Quantidade de Vagas</FormLabel>
          <NumberInput max={1000} min={10}>
            <NumberInputField />
            <NumberInputStepper>
              <NumberIncrementStepper />
              <NumberDecrementStepper />
            </NumberInputStepper>
          </NumberInput>
        </FormControl>
        <FormControl>
          <FormLabel>Local de Realização</FormLabel>
          <Input />
        </FormControl>
        <FormControl>
          <FormLabel>Carga Horária Geral do Evento/</FormLabel>
          <Input />
        </FormControl>
        <FormControl as="fieldset">
          <FormLabel as="legend">Certificação</FormLabel>
          <RadioGroup defaultValue="1">
            <Stack spacing="0">
              <Radio value="1">
                Certificação dos participantes ouvintes e
                palestrantes/mediadores
              </Radio>
              <Radio value="2">Certificação dos organizadores</Radio>
            </Stack>
          </RadioGroup>
        </FormControl>

        <Box paddingY="10">
          <Button colorScheme={"blue"} size="md" width="100%">
            Solicitar
          </Button>
        </Box>
      </Stack>
    </Template>
  );
}
