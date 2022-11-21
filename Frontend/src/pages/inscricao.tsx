import {
  Button,
  FormControl,
  FormLabel,
  Input,
  Select,
  Stack,
  RadioGroup,
  Radio,
  Box,
  Flex,
} from "@chakra-ui/react";
import Template from "../components/Template";

export default function Inscricao() {
  return (
    <Template tituloPagina="Inscrever em Evento">
      <Stack backgroundColor="gray.50" padding="16" shadow="md" width="70%">
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
        <FormControl>
          <FormLabel>Escolaridade</FormLabel>
          <Select>
            <option></option>
            <option>Ensino fundamental incompleto</option>
            <option>Ensino fundamental completo e médio incompleto</option>
            <option>Ensino médio incompleto</option>
            <option>Ensino médio completo superior incompleto</option>
            <option>Nível superior completo</option>
            <option>Pós-graduação</option>
          </Select>
        </FormControl>
        <FormControl>
          <FormLabel>Curso</FormLabel>
          <Input />
        </FormControl>
        <FormControl>
          <FormLabel>Cargo</FormLabel>
          <Input />
        </FormControl>
        <FormControl>
          <FormLabel>Instituição que Representa</FormLabel>
          <Input />
        </FormControl>
        <FormControl>
          <FormLabel>Modalidade de Participação</FormLabel>
          <Select>
            <option></option>
            <option>Ouvinte</option>
            <option>Palestrante</option>
            <option>Facilitador/Mediador</option>
            <option>Comissão Organizadora</option>
          </Select>
        </FormControl>

        <Box paddingY="10">
          <Button colorScheme={"blue"} size="md" width="100%">
            Inscrever
          </Button>
        </Box>
      </Stack>
    </Template>
  );
}
