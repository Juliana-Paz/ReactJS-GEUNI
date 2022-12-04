/* eslint-disable react-hooks/rules-of-hooks */
import {
  Box,
  Button,
  Divider,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Radio,
  RadioGroup,
  Select,
  Stack,
  useDisclosure,
} from "@chakra-ui/react";
import { useState } from "react";
import Template from "../components/Template";

export default function formInscricao({ evento }: any) {
  const [nomeCompleto, setNomeCompleto] = useState("");
  const [cpf, setCpf] = useState("");
  const [sexo, setSexo] = useState("");
  const [dataNascimento, setDataNascimento] = useState("");
  const [email, setEmail] = useState("");
  const [telefone, setTelefone] = useState("");
  const [endereco, setEndereco] = useState("");
  const [cidade, setCidade] = useState("");
  const [cep, setCep] = useState("");
  const [escolaridade, setEscolaridade] = useState("");
  const [curso, setCurso] = useState("");
  const [cargo, setCargo] = useState("");
  const [instituRepre, setInstituRepre] = useState("");
  const [modaliParti, setModaliParti] = useState("");

  const inscrever = () => {
    const pessoa = {
      nomeCompleto: nomeCompleto,
      cpf: cpf,
      sexo: sexo,
      dataNascimento: dataNascimento,
      email: email,
      telefone: telefone,
      endereco: endereco,
      cidade: cidade,
      cep: cep,
      escolaridade: escolaridade,
      curso: curso,
      cargo: cargo,
      instituRepre: instituRepre,
      modaliParti: modaliParti,
    };
    console.log(pessoa);
  };

  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Template tituloPagina="Inscrever em Evento">
      <Stack
        spacing={4}
        backgroundColor="gray.50"
        padding="16"
        shadow="md"
        width="70%"
      >
        <Flex justifyContent={"space-between"}>
          <Button
            size="sm"
            variant="outline"
            colorScheme="blackAlpha"
            shadow="lg"
            onClick={onOpen}
          >
            Informações
          </Button>
          <Divider />
        </Flex>
        <FormControl>
          <FormLabel>Nome Completo</FormLabel>
          <Input onChange={(e) => setNomeCompleto(e.target.value)} />
        </FormControl>
        <FormControl>
          <FormLabel>CPF</FormLabel>
          <Input onChange={(e) => setCpf(e.target.value)} />
        </FormControl>
        <FormControl as="fieldset">
          <FormLabel as="legend">Sexo</FormLabel>
          <RadioGroup defaultValue="1" onChange={setSexo} value={sexo}>
            <Stack>
              <Radio value="1">Feminino</Radio>
              <Radio value="2">Masculino</Radio>
              <Radio value="3">Não Identificado</Radio>
            </Stack>
          </RadioGroup>
        </FormControl>
        <FormControl>
          <FormLabel>Data de Nascimento</FormLabel>
          <Input
            type="date"
            onChange={(e) => setDataNascimento(e.target.value)}
          />
        </FormControl>
        <FormControl>
          <FormLabel>E-mail</FormLabel>
          <Input type="email" onChange={(e) => setEmail(e.target.value)} />
        </FormControl>
        <FormControl>
          <FormLabel>Telefone</FormLabel>
          <Input onChange={(e) => setTelefone(e.target.value)} />
        </FormControl>
        <FormControl>
          <FormLabel>Endereco</FormLabel>
          <Input onChange={(e) => setEndereco(e.target.value)} />
        </FormControl>
        <FormControl>
          <FormLabel>Cidade</FormLabel>
          <Input onChange={(e) => setCidade(e.target.value)} />
        </FormControl>
        <FormControl>
          <FormLabel>CEP</FormLabel>
          <Input onChange={(e) => setCep(e.target.value)} />
        </FormControl>
        <FormControl>
          <FormLabel>Escolaridade</FormLabel>
          <Select onChange={(e) => setEscolaridade(e.target.value)}>
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
          <Input onChange={(e) => setCurso(e.target.value)} />
        </FormControl>
        <FormControl>
          <FormLabel>Cargo</FormLabel>
          <Input onChange={(e) => setCargo(e.target.value)} />
        </FormControl>
        <FormControl>
          <FormLabel>Instituição que Representa</FormLabel>
          <Input onChange={(e) => setInstituRepre(e.target.value)} />
        </FormControl>
        <FormControl>
          <FormLabel>Modalidade de Participação</FormLabel>
          <Select onChange={(e) => setModaliParti(e.target.value)}>
            <option></option>
            <option>Ouvinte</option>
            <option>Palestrante</option>
            <option>Facilitador/Mediador</option>
            <option>Comissão Organizadora</option>
          </Select>
        </FormControl>

        <Box paddingY="10">
          <Button
            colorScheme={"blue"}
            size="md"
            width="100%"
            onClick={inscrever}
          >
            Inscrever
          </Button>
        </Box>
      </Stack>
    </Template>
  );
}
