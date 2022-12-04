/* eslint-disable react-hooks/rules-of-hooks */
import {
  Button,
  Flex,
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
  useToast,
} from "@chakra-ui/react";
import ModalSolicitacao from "../components/ModalSolicitacao";
import Template from "../components/Template";

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
      variant: 'left-accent',
      position: 'top-right',
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
      variant: 'left-accent',
      position: 'top-right',
    });
  };

  return (
    <Template tituloPagina="Lista de Solicitações" isAdm={true}>
      <TableContainer
        backgroundColor="gray.50"
        padding="16"
        shadow="md"
        width="70%"
      >
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
                      <Button
                        colorScheme="red"
                        size="xs"
                        onClick={() => negarSolicitacao(evento.id)}
                      >
                        Negar
                      </Button>
                      <Button
                        colorScheme="green"
                        size="xs"
                        onClick={() => {
                          aprovarSolicitacao(evento.id);                          
                        }}
                      >
                        Aceitar
                      </Button>
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
    id: "0",
    nome: "XI Semana Acadêmica UNITINS",
    descricao:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, deleniti voluptas, voluptate, reiciendis ratione atque nam a omnis nostrum voluptatem consequatur neque repellat esse aperiam eaque iusto error quo excepturi!",
    objetivoGeral:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloribus, aliquid quod.",
    cargaHoraria: "5h",
    quantidadeVagas: "100",
    periodoInscricao: "10/09/2023 - 20/09/2023",
    periodoRealizacao: "23/09/2023 - 25/09/2023",
    publicoAlvo: "Comunidade Interna",
    certificacao: "Sim",
  },
  {
    id: "1",
    nome: "III Congresso dos Direitos Humanos",
    descricao:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, deleniti voluptas, voluptate, reiciendis ratione atque nam a omnis nostrum voluptatem consequatur neque repellat esse aperiam eaque iusto error quo excepturi!",
    objetivoGeral:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloribus, aliquid quod.",
    cargaHoraria: "10h",
    quantidadeVagas: "1000",
    periodoInscricao: "20/09/2023 - 23/09/2023",
    periodoRealizacao: "23/09/2023 - 25/09/2023",
    publicoAlvo: "Comunidade Interna e Externa",
    certificacao: "Sim",
  },
  {
    id: "2",
    nome: "Outubro Rosa - Um Toque pra Salvar Vidas",
    descricao:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, deleniti voluptas, voluptate, reiciendis ratione atque nam a omnis nostrum voluptatem consequatur neque repellat esse aperiam eaque iusto error quo excepturi!",
    objetivoGeral:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloribus, aliquid quod.",
    cargaHoraria: "10h",
    quantidadeVagas: "150",
    periodoInscricao: "10/08/2023 - 13/08/2023",
    periodoRealizacao: "15/09/2023 - 15/09/2023",
    publicoAlvo: "Comunidade Interna e Externa",
    certificacao: "Não",
  },
  {
    id: "3",
    nome: "Tecnologias Emergentes no Sec. XXI",
    descricao:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, deleniti voluptas, voluptate, reiciendis ratione atque nam a omnis nostrum voluptatem consequatur neque repellat esse aperiam eaque iusto error quo excepturi!",
    objetivoGeral:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloribus, aliquid quod.",
    cargaHoraria: "2h",
    quantidadeVagas: "500",
    periodoInscricao: "26/08/2023 - 30/08/2023",
    periodoRealizacao: "30/09/2023 - 31/10/2023",
    publicoAlvo: "Comunidade Interna e Externa",
    certificacao: "Não",
  },

  {
    id: "4",
    nome: "Direção Defensiva",
    descricao:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, deleniti voluptas, voluptate, reiciendis ratione atque nam a omnis nostrum voluptatem consequatur neque repellat esse aperiam eaque iusto error quo excepturi!",
    objetivoGeral:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloribus, aliquid quod.",
    cargaHoraria: "15h",
    quantidadeVagas: "50",
    periodoInscricao: "20/05/2023 - 23/05/2023",
    periodoRealizacao: "23/05/2023 - 25/05/2023",
    publicoAlvo: "Comunidade Interna",
    certificacao: "Sim",
  },
  {
    id: "5",
    nome: "III Congresso dos Direitos Humanos",
    descricao:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, deleniti voluptas, voluptate, reiciendis ratione atque nam a omnis nostrum voluptatem consequatur neque repellat esse aperiam eaque iusto error quo excepturi!",
    objetivoGeral:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloribus, aliquid quod.",
    cargaHoraria: "10h",
    quantidadeVagas: "1000",
    periodoInscricao: "20/09/2023 - 23/09/2023",
    periodoRealizacao: "23/09/2023 - 25/09/2023",
    publicoAlvo: "Comunidade Interna e Externa",
    certificacao: "Sim",
  },
  {
    id: "6",
    nome: "Minorias em Pauta",
    descricao:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, deleniti voluptas, voluptate, reiciendis ratione atque nam a omnis nostrum voluptatem consequatur neque repellat esse aperiam eaque iusto error quo excepturi!",
    objetivoGeral:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloribus, aliquid quod.",
    cargaHoraria: "3h",
    quantidadeVagas: "100",
    periodoInscricao: "20/09/2023 - 23/09/2023",
    periodoRealizacao: "23/09/2023 - 25/09/2023",
    publicoAlvo: "Comunidade Interna e Externa",
    certificacao: "Não",
  },
  {
    id: "7",
    nome: "Roda de Conversa - Mulheres na TI",
    descricao:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, deleniti voluptas, voluptate, reiciendis ratione atque nam a omnis nostrum voluptatem consequatur neque repellat esse aperiam eaque iusto error quo excepturi!",
    objetivoGeral:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloribus, aliquid quod.",
    cargaHoraria: "4h",
    quantidadeVagas: "200",
    periodoInscricao: "20/09/2023 - 23/09/2023",
    periodoRealizacao: "23/09/2023 - 25/09/2023",
    publicoAlvo: "Comunidade Interna e Externa",
    certificacao: "Sim",
  },
  {
    id: "8",
    nome: "Atualização em Direito Anticorrupção e Direito Eleitoral",
    descricao:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, deleniti voluptas, voluptate, reiciendis ratione atque nam a omnis nostrum voluptatem consequatur neque repellat esse aperiam eaque iusto error quo excepturi!",
    objetivoGeral:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloribus, aliquid quod.",
    cargaHoraria: "10h",
    quantidadeVagas: "140",
    periodoInscricao: "14/09/2023 - 20/09/2023",
    periodoRealizacao: "01/10/2023 - 05/10/2023",
    publicoAlvo: "Comunidade Interna",
    certificacao: "Sim",
  },
  {
    id: "9",
    nome: "Empregos do Futuro e a 5° Revolução Industrial",
    descricao:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, deleniti voluptas, voluptate, reiciendis ratione atque nam a omnis nostrum voluptatem consequatur neque repellat esse aperiam eaque iusto error quo excepturi!",
    objetivoGeral:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloribus, aliquid quod.",
    cargaHoraria: "14h",
    quantidadeVagas: "300",
    periodoInscricao: "05/03/2023 - 12/03/2023",
    periodoRealizacao: "23/03/2023 - 25/03/2023",
    publicoAlvo: "Comunidade Interna e Externa",
    certificacao: "Sim",
  },
  {
    id: "10",
    nome: "XI SIGTEC",
    descricao:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, deleniti voluptas, voluptate, reiciendis ratione atque nam a omnis nostrum voluptatem consequatur neque repellat esse aperiam eaque iusto error quo excepturi!",
    objetivoGeral:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloribus, aliquid quod.",
    cargaHoraria: "12h",
    quantidadeVagas: "80",
    periodoInscricao: "20/09/2023 - 23/09/2023",
    periodoRealizacao: "23/09/2023 - 25/09/2023",
    publicoAlvo: "Comunidade Interna e Externa",
    certificacao: "Sim",
  },
  {
    id: "11",
    nome: "Setembro Amarelo - A Favor da Vida",
    descricao:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, deleniti voluptas, voluptate, reiciendis ratione atque nam a omnis nostrum voluptatem consequatur neque repellat esse aperiam eaque iusto error quo excepturi!",
    objetivoGeral:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloribus, aliquid quod.",
    cargaHoraria: "1h",
    quantidadeVagas: "500",
    periodoInscricao: "20/09/2023 - 23/09/2023",
    periodoRealizacao: "23/09/2023 - 25/09/2023",
    publicoAlvo: "Comunidade Interna e Externa",
    certificacao: "Não",
  },
  {
    id: "12",
    nome: "X Semana do Direito",
    descricao:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, deleniti voluptas, voluptate, reiciendis ratione atque nam a omnis nostrum voluptatem consequatur neque repellat esse aperiam eaque iusto error quo excepturi!",
    objetivoGeral:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloribus, aliquid quod.",
    cargaHoraria: "10h",
    quantidadeVagas: "400",
    periodoInscricao: "20/09/2023 - 23/09/2023",
    periodoRealizacao: "23/09/2023 - 25/09/2023",
    publicoAlvo: "Comunidade Interna e Externa",
    certificacao: "Sim",
  },
  {
    id: "13",
    nome: "CONSEPE UNITINS",
    descricao:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, deleniti voluptas, voluptate, reiciendis ratione atque nam a omnis nostrum voluptatem consequatur neque repellat esse aperiam eaque iusto error quo excepturi!",
    objetivoGeral:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloribus, aliquid quod.",
    cargaHoraria: "8h",
    quantidadeVagas: "50",
    periodoInscricao: "20/09/2023 - 23/09/2023",
    periodoRealizacao: "23/09/2023 - 25/09/2023",
    publicoAlvo: "Comunidade Interna",
    certificacao: "Sim",
  },
  {
    id: "14",
    nome: "III Semana da Tecnologia",
    descricao:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, deleniti voluptas, voluptate, reiciendis ratione atque nam a omnis nostrum voluptatem consequatur neque repellat esse aperiam eaque iusto error quo excepturi!",
    objetivoGeral:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloribus, aliquid quod.",
    cargaHoraria: "15h",
    quantidadeVagas: "600",
    periodoInscricao: "20/09/2023 - 23/09/2023",
    periodoRealizacao: "23/09/2023 - 25/09/2023",
    publicoAlvo: "Comunidade Interna e Externa",
    certificacao: "Sim",
  },
  {
    id: "15",
    nome: "Ofinca de LIBRAS",
    descricao:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, deleniti voluptas, voluptate, reiciendis ratione atque nam a omnis nostrum voluptatem consequatur neque repellat esse aperiam eaque iusto error quo excepturi!",
    objetivoGeral:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloribus, aliquid quod.",
    cargaHoraria: "15h",
    quantidadeVagas: "45",
    periodoInscricao: "20/09/2023 - 23/09/2023",
    periodoRealizacao: "23/09/2023 - 25/09/2023",
    publicoAlvo: "Comunidade Interna e Externa",
    certificacao: "Sim",
  },
  {
    id: "16",
    nome: "Seminário Sobre o Direito da Criança",
    descricao:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, deleniti voluptas, voluptate, reiciendis ratione atque nam a omnis nostrum voluptatem consequatur neque repellat esse aperiam eaque iusto error quo excepturi!",
    objetivoGeral:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloribus, aliquid quod.",
    cargaHoraria: "3h",
    quantidadeVagas: "150",
    periodoInscricao: "20/09/2023 - 23/09/2023",
    periodoRealizacao: "23/09/2023 - 25/09/2023",
    publicoAlvo: "Comunidade Interna",
    certificacao: "Sim",
  },
  {
    id: "17",
    nome: "Semana da Acessibilidade",
    descricao:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, deleniti voluptas, voluptate, reiciendis ratione atque nam a omnis nostrum voluptatem consequatur neque repellat esse aperiam eaque iusto error quo excepturi!",
    objetivoGeral:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloribus, aliquid quod.",
    cargaHoraria: "10h",
    quantidadeVagas: "100",
    periodoInscricao: "20/09/2023 - 23/09/2023",
    periodoRealizacao: "23/09/2023 - 25/09/2023",
    publicoAlvo: "Comunidade Interna e Externa",
    certificacao: "Sim",
  },
  {
    id: "18",
    nome: "Direito da Pessoa com Autismo",
    descricao:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, deleniti voluptas, voluptate, reiciendis ratione atque nam a omnis nostrum voluptatem consequatur neque repellat esse aperiam eaque iusto error quo excepturi!",
    objetivoGeral:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloribus, aliquid quod.",
    cargaHoraria: "4h",
    quantidadeVagas: "500",
    periodoInscricao: "20/09/2023 - 23/09/2023",
    periodoRealizacao: "23/09/2023 - 25/09/2023",
    publicoAlvo: "Comunidade Interna e Externa",
    certificacao: "Sim",
  },
  {
    id: "19",
    nome: "Inclusão no Âmbito Acadêmico",
    descricao:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, deleniti voluptas, voluptate, reiciendis ratione atque nam a omnis nostrum voluptatem consequatur neque repellat esse aperiam eaque iusto error quo excepturi!",
    objetivoGeral:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloribus, aliquid quod.",
    cargaHoraria: "3h",
    quantidadeVagas: "200",
    periodoInscricao: "20/09/2023 - 23/09/2023",
    periodoRealizacao: "23/09/2023 - 25/09/2023",
    publicoAlvo: "Comunidade Interna e Externa",
    certificacao: "Não",
  },
];
