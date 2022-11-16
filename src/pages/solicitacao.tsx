import {
  Box,
  Button,
  Flex,
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
import DividerWithTitle from "../components/DividerWithTitle";
import Template from "../components/Template";

export default function Solicitacao() {
  function enviar() {
    console.log({ nome: "semana acad", modalidade: "ead" });
    return null;
  }

  return (
    <Template tituloPagina="Solicitar Evento">
      <Stack backgroundColor="gray.50" padding="16" shadow="md" width="70%">
        <DividerWithTitle title="Dados Pessoais do Solicitante" />
        <FormControl>
          <FormLabel>Nome Completo</FormLabel>
          <Input />
        </FormControl>
        <FormControl>
          <FormLabel>CPF</FormLabel>
          <Input />
        </FormControl>
        <FormControl as="fieldset">
          <FormLabel as="legend">Sexo</FormLabel>
          <RadioGroup defaultValue="1">
            <Flex gap="5">
              <Radio value="1">Feminino</Radio>
              <Radio value="2">Masculino</Radio>
              <Radio value="3">Não Identificado</Radio>
            </Flex>
          </RadioGroup>
        </FormControl>
        <FormControl>
          <FormLabel>Data de Nascimento</FormLabel>
          <Input type="date" />
        </FormControl>
        <FormControl>
          <FormLabel>E-mail</FormLabel>
          <Input type="email" />
        </FormControl>
        <FormControl>
          <FormLabel>Telefone</FormLabel>
          <Input />
        </FormControl>
        <FormControl>
          <FormLabel>Endereco</FormLabel>
          <Input />
        </FormControl>
        <FormControl>
          <FormLabel>Cidade</FormLabel>
          <Input />
        </FormControl>
        <FormControl>
          <FormLabel>CEP</FormLabel>
          <Input />
        </FormControl>
        <DividerWithTitle title="Identificação e Apresentação do Evento" paddingTop="50px" />
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
          <FormLabel>Certificação</FormLabel>
          <Select>
            <option></option>
            <option>
              Certificação dos participantes ouvintes e palestrantes/mediadores
            </option>
            <option>Certificação dos organizadores</option>
            <option>Sem Certificação</option>
          </Select>
        </FormControl>
        <FormControl>
          <FormLabel>Modalidade</FormLabel>
          <Select>
            <option></option>
            <option>Cine-debate</option>
            <option>Encontro</option>
            <option>Fórum</option>
            <option>Colóquio</option>
            <option>Conferência</option>
            <option>Congresso</option>
            <option>Mesa-redonda</option>
            <option>Mostra</option>
            <option>Palestra</option>
            <option>Roda de conversa</option>
            <option>Seminário</option>
            <option>Simpósio</option>
            <option>Talk show</option>
            <option>Workshop</option>
          </Select>
        </FormControl>
        <DividerWithTitle title="Dados Específicos do Evento" paddingTop="50px" />
        <FormControl>
          <FormLabel>Público-Alvo</FormLabel>
          <Select>
            <option></option>
            <option>Comunidade Interna</option>
            <option>Comunidade Externa</option>
            <option>Comunidade Interna e Extera</option>
          </Select>
        </FormControl>
        <FormControl>
          <FormLabel>Data de Início do Evento</FormLabel>
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
          <NumberInput max={10000} min={10}>
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
          <FormLabel>Carga Horária Geral do Evento</FormLabel>
          <Input />
        </FormControl>

        <Box paddingY="10">
          <Button colorScheme={"blue"} size="md" width="100%" onClick={enviar}>
            Solicitar
          </Button>
        </Box>
      </Stack>
    </Template>
  );
}
