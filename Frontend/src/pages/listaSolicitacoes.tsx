import {
  Flex,
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import { AiOutlineCheckCircle, AiOutlineCloseCircle } from "react-icons/ai";
import ModalSolicitacao from "../components/ModalSolicitacao";
import Template from "../components/Template";

export default function listaSolicitacoes() {
  return (
    <Template tituloPagina="Solicitações de Eventos" isAdm={true}>
      <TableContainer>
        <Table variant="simple">
          <Thead>
            <Tr>
              <Th>Nome do Evento</Th>
              <Th>Ações</Th>
            </Tr>
          </Thead>
          <Tbody>
            {EVENTOS.map((evento, key) => {
              return (
                <Tr key={key}>
                  <Td>{evento.nome}</Td>
                  <Td isNumeric>
                    <Flex gap="1">
                      <ModalSolicitacao evento={evento} />
                      <AiOutlineCloseCircle cursor="pointer" />
                      <AiOutlineCheckCircle cursor="pointer" />
                    </Flex>
                  </Td>
                </Tr>
              );
            })}
          </Tbody>
        </Table>
      </TableContainer>
    </Template>
  );
}

const EVENTOS = [
  {
    nome: "XI Semana Acadêmica UNITINS",
    descricao:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, deleniti voluptas, voluptate, reiciendis ratione atque nam a omnis nostrum voluptatem consequatur neque repellat esse aperiam eaque iusto error quo excepturi!",
    objetivoGeral:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloribus, aliquid quod.",
    cargaHoraria: "5h",
    quantidadeVagas: "100",
    peridoInscricao: "10/09/2023 - 20/09/2023",
    peridoRealizacao: "23/09/2023 - 25/09/2023",
    publicoAlvo: "Comunidade Interna",
    certificacao: "Sim",
  },
  {
    nome: "III Congresso dos Direitos Humanos",
    descricao:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, deleniti voluptas, voluptate, reiciendis ratione atque nam a omnis nostrum voluptatem consequatur neque repellat esse aperiam eaque iusto error quo excepturi!",
    objetivoGeral:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloribus, aliquid quod.",
    cargaHoraria: "10h",
    quantidadeVagas: "1000",
    peridoInscricao: "20/09/2023 - 23/09/2023",
    peridoRealizacao: "23/09/2023 - 25/09/2023",
    publicoAlvo: "Comunidade Interna e Externa",
    certificacao: "Sim",
  },
  {
    nome: "Outubro Rosa - Um Toque pra Salvar Vidas",
    descricao:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, deleniti voluptas, voluptate, reiciendis ratione atque nam a omnis nostrum voluptatem consequatur neque repellat esse aperiam eaque iusto error quo excepturi!",
    objetivoGeral:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloribus, aliquid quod.",
    cargaHoraria: "10h",
    quantidadeVagas: "150",
    peridoInscricao: "10/08/2023 - 13/08/2023",
    peridoRealizacao: "15/09/2023 - 15/09/2023",
    publicoAlvo: "Comunidade Interna e Externa",
    certificacao: "Não",
  },
  {
    nome: "Tecnologias Emergentes no Sec. XXI",
    descricao:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, deleniti voluptas, voluptate, reiciendis ratione atque nam a omnis nostrum voluptatem consequatur neque repellat esse aperiam eaque iusto error quo excepturi!",
    objetivoGeral:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloribus, aliquid quod.",
    cargaHoraria: "2h",
    quantidadeVagas: "500",
    peridoInscricao: "26/08/2023 - 30/08/2023",
    peridoRealizacao: "30/09/2023 - 31/10/2023",
    publicoAlvo: "Comunidade Interna e Externa",
    certificacao: "Não",
  },

  {
    nome: "Direção Defensiva",
    descricao:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, deleniti voluptas, voluptate, reiciendis ratione atque nam a omnis nostrum voluptatem consequatur neque repellat esse aperiam eaque iusto error quo excepturi!",
    objetivoGeral:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloribus, aliquid quod.",
    cargaHoraria: "15h",
    quantidadeVagas: "50",
    peridoInscricao: "20/05/2023 - 23/05/2023",
    peridoRealizacao: "23/05/2023 - 25/05/2023",
    publicoAlvo: "Comunidade Interna",
    certificacao: "Sim",
  },
  {
    nome: "III Congresso dos Direitos Humanos",
    descricao:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, deleniti voluptas, voluptate, reiciendis ratione atque nam a omnis nostrum voluptatem consequatur neque repellat esse aperiam eaque iusto error quo excepturi!",
    objetivoGeral:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloribus, aliquid quod.",
    cargaHoraria: "10h",
    quantidadeVagas: "1000",
    peridoInscricao: "20/09/2023 - 23/09/2023",
    peridoRealizacao: "23/09/2023 - 25/09/2023",
    publicoAlvo: "Comunidade Interna e Externa",
    certificacao: "Sim",
  },
  {
    nome: "Minorias em Pauta",
    descricao:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, deleniti voluptas, voluptate, reiciendis ratione atque nam a omnis nostrum voluptatem consequatur neque repellat esse aperiam eaque iusto error quo excepturi!",
    objetivoGeral:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloribus, aliquid quod.",
    cargaHoraria: "3h",
    quantidadeVagas: "100",
    peridoInscricao: "20/09/2023 - 23/09/2023",
    peridoRealizacao: "23/09/2023 - 25/09/2023",
    publicoAlvo: "Comunidade Interna e Externa",
    certificacao: "Não",
  },
  {
    nome: "Roda de Conversa - Mulheres na TI",
    descricao:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, deleniti voluptas, voluptate, reiciendis ratione atque nam a omnis nostrum voluptatem consequatur neque repellat esse aperiam eaque iusto error quo excepturi!",
    objetivoGeral:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloribus, aliquid quod.",
    cargaHoraria: "4h",
    quantidadeVagas: "200",
    peridoInscricao: "20/09/2023 - 23/09/2023",
    peridoRealizacao: "23/09/2023 - 25/09/2023",
    publicoAlvo: "Comunidade Interna e Externa",
    certificacao: "Sim",
  },
  {
    nome: "Atualização em Direito Anticorrupção e Direito Eleitoral",
    descricao:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, deleniti voluptas, voluptate, reiciendis ratione atque nam a omnis nostrum voluptatem consequatur neque repellat esse aperiam eaque iusto error quo excepturi!",
    objetivoGeral:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloribus, aliquid quod.",
    cargaHoraria: "10h",
    quantidadeVagas: "140",
    peridoInscricao: "14/09/2023 - 20/09/2023",
    peridoRealizacao: "01/10/2023 - 05/10/2023",
    publicoAlvo: "Comunidade Interna",
    certificacao: "Sim",
  },
  {
    nome: "Empregos do Futuro e a 5° Revolução Industrial",
    descricao:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, deleniti voluptas, voluptate, reiciendis ratione atque nam a omnis nostrum voluptatem consequatur neque repellat esse aperiam eaque iusto error quo excepturi!",
    objetivoGeral:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloribus, aliquid quod.",
    cargaHoraria: "14h",
    quantidadeVagas: "300",
    peridoInscricao: "05/03/2023 - 12/03/2023",
    peridoRealizacao: "23/03/2023 - 25/03/2023",
    publicoAlvo: "Comunidade Interna e Externa",
    certificacao: "Sim",
  },
  {
    nome: "XI SIGTEC",
    descricao:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, deleniti voluptas, voluptate, reiciendis ratione atque nam a omnis nostrum voluptatem consequatur neque repellat esse aperiam eaque iusto error quo excepturi!",
    objetivoGeral:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloribus, aliquid quod.",
    cargaHoraria: "12h",
    quantidadeVagas: "80",
    peridoInscricao: "20/09/2023 - 23/09/2023",
    peridoRealizacao: "23/09/2023 - 25/09/2023",
    publicoAlvo: "Comunidade Interna e Externa",
    certificacao: "Sim",
  },
  {
    nome: "Setembro Amarelo - A Favor da Vida",
    descricao:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, deleniti voluptas, voluptate, reiciendis ratione atque nam a omnis nostrum voluptatem consequatur neque repellat esse aperiam eaque iusto error quo excepturi!",
    objetivoGeral:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloribus, aliquid quod.",
    cargaHoraria: "1h",
    quantidadeVagas: "",
    peridoInscricao: "20/09/2023 - 23/09/2023",
    peridoRealizacao: "23/09/2023 - 25/09/2023",
    publicoAlvo: "Comunidade Interna e Externa",
    certificacao: "Não",
  },
  {
    nome: "X Semana do Direito",
    descricao:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, deleniti voluptas, voluptate, reiciendis ratione atque nam a omnis nostrum voluptatem consequatur neque repellat esse aperiam eaque iusto error quo excepturi!",
    objetivoGeral:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloribus, aliquid quod.",
    cargaHoraria: "10h",
    quantidadeVagas: "400",
    peridoInscricao: "20/09/2023 - 23/09/2023",
    peridoRealizacao: "23/09/2023 - 25/09/2023",
    publicoAlvo: "Comunidade Interna e Externa",
    certificacao: "Sim",
  },
  {
    nome: "CONSEPE UNITINS",
    descricao:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, deleniti voluptas, voluptate, reiciendis ratione atque nam a omnis nostrum voluptatem consequatur neque repellat esse aperiam eaque iusto error quo excepturi!",
    objetivoGeral:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloribus, aliquid quod.",
    cargaHoraria: "8h",
    quantidadeVagas: "50",
    peridoInscricao: "20/09/2023 - 23/09/2023",
    peridoRealizacao: "23/09/2023 - 25/09/2023",
    publicoAlvo: "Comunidade Interna",
    certificacao: "Sim",
  },
  {
    nome: "III Semana da Tecnologia",
    descricao:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, deleniti voluptas, voluptate, reiciendis ratione atque nam a omnis nostrum voluptatem consequatur neque repellat esse aperiam eaque iusto error quo excepturi!",
    objetivoGeral:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloribus, aliquid quod.",
    cargaHoraria: "15h",
    quantidadeVagas: "600",
    peridoInscricao: "20/09/2023 - 23/09/2023",
    peridoRealizacao: "23/09/2023 - 25/09/2023",
    publicoAlvo: "Comunidade Interna e Externa",
    certificacao: "Sim",
  },
  {
    nome: "Ofinca de LIBRAS",
    descricao:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, deleniti voluptas, voluptate, reiciendis ratione atque nam a omnis nostrum voluptatem consequatur neque repellat esse aperiam eaque iusto error quo excepturi!",
    objetivoGeral:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloribus, aliquid quod.",
    cargaHoraria: "15h",
    quantidadeVagas: "45",
    peridoInscricao: "20/09/2023 - 23/09/2023",
    peridoRealizacao: "23/09/2023 - 25/09/2023",
    publicoAlvo: "Comunidade Interna e Externa",
    certificacao: "Sim",
  },
  {
    nome: "Seminário Sobre o Direito da Criança",
    descricao:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, deleniti voluptas, voluptate, reiciendis ratione atque nam a omnis nostrum voluptatem consequatur neque repellat esse aperiam eaque iusto error quo excepturi!",
    objetivoGeral:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloribus, aliquid quod.",
    cargaHoraria: "3h",
    quantidadeVagas: "150",
    peridoInscricao: "20/09/2023 - 23/09/2023",
    peridoRealizacao: "23/09/2023 - 25/09/2023",
    publicoAlvo: "Comunidade Interna",
    certificacao: "Sim",
  },
  {
    nome: "Semana da Acessibilidade",
    descricao:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, deleniti voluptas, voluptate, reiciendis ratione atque nam a omnis nostrum voluptatem consequatur neque repellat esse aperiam eaque iusto error quo excepturi!",
    objetivoGeral:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloribus, aliquid quod.",
    cargaHoraria: "10h",
    quantidadeVagas: "100",
    peridoInscricao: "20/09/2023 - 23/09/2023",
    peridoRealizacao: "23/09/2023 - 25/09/2023",
    publicoAlvo: "Comunidade Interna e Externa",
    certificacao: "Sim",
  },
  {
    nome: "Direito da Pessoa com Autismo",
    descricao:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, deleniti voluptas, voluptate, reiciendis ratione atque nam a omnis nostrum voluptatem consequatur neque repellat esse aperiam eaque iusto error quo excepturi!",
    objetivoGeral:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloribus, aliquid quod.",
    cargaHoraria: "4h",
    quantidadeVagas: "500",
    peridoInscricao: "20/09/2023 - 23/09/2023",
    peridoRealizacao: "23/09/2023 - 25/09/2023",
    publicoAlvo: "Comunidade Interna e Externa",
    certificacao: "Sim",
  },
  {
    nome: "Inclusão no Âmbito Acadêmico",
    descricao:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, deleniti voluptas, voluptate, reiciendis ratione atque nam a omnis nostrum voluptatem consequatur neque repellat esse aperiam eaque iusto error quo excepturi!",
    objetivoGeral:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloribus, aliquid quod.",
    cargaHoraria: "3h",
    quantidadeVagas: "200",
    peridoInscricao: "20/09/2023 - 23/09/2023",
    peridoRealizacao: "23/09/2023 - 25/09/2023",
    publicoAlvo: "Comunidade Interna e Externa",
    certificacao: "Não",
  },
];
