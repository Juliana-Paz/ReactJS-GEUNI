/* eslint-disable react-hooks/rules-of-hooks */
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
import { useState } from "react";
import DividerWithTitle from "../components/DividerWithTitle";
import Template from "../components/Template";

export default function formSolicitacao() {
  const [nomePessoa, setNomePessoa] = useState("");
  const [cpf, setCpf] = useState("");
  const [sexo, setSexo] = useState("");
  const [dataNascimento, setDataNascimento] = useState("");
  const [email, setEmail] = useState("");
  const [telefone, setTelefone] = useState("");
  const [endereco, setEndereco] = useState("");
  const [cidade, setCidade] = useState("");
  const [cep, setCep] = useState("");
  const [nomeEvento, setNomeEvento] = useState("");
  const [descEvento, setDescEvento] = useState("");
  const [geral, setObjGeral] = useState("");
  const [certificado, setCertificado] = useState("");
  const [modalidade, setModalidade] = useState("");
  const [publicoAlvo, setPublicoAlvo] = useState("");
  const [dataInicioEvento, setDataInicioEvento] = useState("");
  const [dataFinalEvento, setDataFinalEvento] = useState("");
  const [dataInicioInscricao, setDataInicioInscricao] = useState("");
  const [dataFinalInscricao, setDataFinalInscricao] = useState("");
  const [qntdVagas, setQntdVagas] = useState("");
  const [localRealizacao, setLocalRealizacao] = useState("");
  const [cargaHoraria, setCargaHoraria] = useState("");

  const enviar = () => {
    const evento = {
      nomePessoa: nomePessoa,
      cpf: cpf,
      sexo: sexo,
      dataNascimento: dataNascimento,
      email: email,
      telefone: telefone,
      endereco: endereco,
      cidade: cidade,
      cep: cep,
      nomeEvento: nomeEvento,
      descEvento: descEvento,
      geral: geral,
      certificado: certificado,
      modalidade: modalidade,
      publicoAlvo: publicoAlvo,
      dataInicioEvento: dataInicioEvento,
      dataFinalEvento: dataFinalEvento,
      dataInicioInscricao: dataInicioInscricao,
      dataFinalInscricao: dataFinalInscricao,
      qntdVagas: qntdVagas,
      localRealizacao: localRealizacao,
      cargaHoraria: cargaHoraria,
    };
    console.log(evento);
  };

  return (
    <Template tituloPagina="Solicitar Evento">
      <Stack spacing={5} backgroundColor="gray.50" padding="16" shadow="md" width="70%">
        <DividerWithTitle title="Dados Pessoais do Solicitante" />
        <FormControl>
          <FormLabel>Nome Completo</FormLabel>
          <Input onChange={(e) => setNomePessoa(e.target.value)} />
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
        <DividerWithTitle
          title="Identificação e Apresentação do Evento"
          paddingTop="50px"
        />
        <FormControl>
          <FormLabel>Nome do Evento</FormLabel>
          <Input onChange={(e) => setNomeEvento(e.target.value)} />
        </FormControl>
        <FormControl>
          <FormLabel>Descrição do Evento</FormLabel>
          <Textarea
            borderColor="gray.300"
            _hover={{
              borderRadius: "gray.300",
            }}
            onChange={(e) => setDescEvento(e.target.value)}
          />
        </FormControl>
        <FormControl>
          <FormLabel>Objetivo Geral</FormLabel>
          <Input onChange={(e) => setObjGeral(e.target.value)} />
        </FormControl>
        <FormControl>
          <FormLabel>Certificação</FormLabel>
          <Select onChange={(e) => setCertificado(e.target.value)}>
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
          <Select onChange={(e) => setModalidade(e.target.value)}>
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
        <DividerWithTitle
          title="Dados Específicos do Evento"
          paddingTop="50px"
        />
        <FormControl>
          <FormLabel>Público-Alvo</FormLabel>
          <Select onChange={(e) => setPublicoAlvo(e.target.value)}>
            <option></option>
            <option>Comunidade Interna</option>
            <option>Comunidade Externa</option>
            <option>Comunidade Interna e Extera</option>
          </Select>
        </FormControl>
        <FormControl>
          <FormLabel>Data de Início do Evento</FormLabel>
          <Input
            type="date"
            onChange={(e) => setDataInicioEvento(e.target.value)}
          />
        </FormControl>
        <FormControl>
          <FormLabel>Data de Finalização do Evento</FormLabel>
          <Input
            type="date"
            onChange={(e) => setDataFinalEvento(e.target.value)}
          />
        </FormControl>
        <FormControl>
          <FormLabel>Data de Início das Inscrições</FormLabel>
          <Input
            type="date"
            onChange={(e) => setDataInicioInscricao(e.target.value)}
          />
        </FormControl>
        <FormControl>
          <FormLabel>Data Final das Inscrições</FormLabel>
          <Input
            type="date"
            onChange={(e) => setDataFinalInscricao(e.target.value)}
          />
        </FormControl>
        <FormControl>
          <FormLabel>Quantidade de Vagas</FormLabel>
          <NumberInput max={10000} min={10}>
            <NumberInputField onChange={(e) => setQntdVagas(e.target.value)} />
            <NumberInputStepper>
              <NumberIncrementStepper />
              <NumberDecrementStepper />
            </NumberInputStepper>
          </NumberInput>
        </FormControl>
        <FormControl>
          <FormLabel>Local de Realização</FormLabel>
          <Input onChange={(e) => setLocalRealizacao(e.target.value)} />
        </FormControl>
        <FormControl>
          <FormLabel>Carga Horária Geral do Evento</FormLabel>
          <Input onChange={(e) => setCargaHoraria(e.target.value)} />
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
