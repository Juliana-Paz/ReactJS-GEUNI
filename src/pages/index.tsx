import { SimpleGrid } from "@chakra-ui/react";
import Card from "../components/Cards";
import Template from "../components/Template";

export default function Home() {
  return (
    <Template tituloPagina="Eventos Disponíveis">
      <SimpleGrid columns={2} spacing={7}>
        {EVENTOS.map((evento, key) => {
          return <Card evento={evento} key={key} />;
        })}
      </SimpleGrid>
    </Template>
  );
}

const EVENTOS = [
  {
    nome: "XI Semana Acadêmica UNITINS",
    peridoInscricao: "10/09/2023 - 20/09/2023",
    descricao:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, deleniti voluptas, voluptate, reiciendis ratione atque nam a omnis nostrum voluptatem consequatur neque repellat esse aperiam eaque iusto error quo excepturi!",
  },
  {
    nome: "III Congresso dos Direitos Humanos",
    peridoInscricao: "10/09/2023 - 20/09/2023",
    descricao:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, deleniti voluptas, voluptate, reiciendis ratione atque nam a omnis nostrum voluptatem consequatur neque repellat esse aperiam eaque iusto error quo excepturi!",
  },
  {
    nome: "Outubro Rosa - Um Toque pra Salvar Vidas",
    peridoInscricao: "10/09/2023 - 20/09/2023",
    descricao:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, deleniti voluptas, voluptate, reiciendis ratione atque nam a omnis nostrum voluptatem consequatur neque repellat esse aperiam eaque iusto error quo excepturi!",
  },
  {
    nome: "Tecnologias Emergentes no Sec. XXI",
    peridoInscricao: "10/09/2023 - 20/09/2023",
    descricao:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, deleniti voluptas, voluptate, reiciendis ratione atque nam a omnis nostrum voluptatem consequatur neque repellat esse aperiam eaque iusto error quo excepturi!",
  },
  {
    nome: "Direção Defensiva",
    peridoInscricao: "10/09/2023 - 20/09/2023",
    descricao:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, deleniti voluptas, voluptate, reiciendis ratione atque nam a omnis nostrum voluptatem consequatur neque repellat esse aperiam eaque iusto error quo excepturi!",
  },
  {
    nome: "Minorias em Pauta",
    peridoInscricao: "10/09/2023 - 20/09/2023",
    descricao:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, deleniti voluptas, voluptate, reiciendis ratione atque nam a omnis nostrum voluptatem consequatur neque repellat esse aperiam eaque iusto error quo excepturi!",
  },
  {
    nome: "Roda de Conversa - Mulheres na TI",
    peridoInscricao: "10/09/2023 - 20/09/2023",
    descricao:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, deleniti voluptas, voluptate, reiciendis ratione atque nam a omnis nostrum voluptatem consequatur neque repellat esse aperiam eaque iusto error quo excepturi!",
  },
  {
    nome: "Atualização em Direito Anticorrupção e Direito Eleitoral",
    peridoInscricao: "10/09/2023 - 20/09/2023",
    descricao:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, deleniti voluptas, voluptate, reiciendis ratione atque nam a omnis nostrum voluptatem consequatur neque repellat esse aperiam eaque iusto error quo excepturi!",
  },
  {
    nome: "Empregos do Futuro e a 5° Revolução Industrial",
    peridoInscricao: "10/09/2023 - 20/09/2023",
    descricao:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, deleniti voluptas, voluptate, reiciendis ratione atque nam a omnis nostrum voluptatem consequatur neque repellat esse aperiam eaque iusto error quo excepturi!",
  },
  {
    nome: "XI SIGTEC",
    peridoInscricao: "10/09/2023 - 20/09/2023",
    descricao:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, deleniti voluptas, voluptate, reiciendis ratione atque nam a omnis nostrum voluptatem consequatur neque repellat esse aperiam eaque iusto error quo excepturi!",
  },
  {
    nome: "Setembro Amarelo - A Favor da Vida",
    peridoInscricao: "10/09/2023 - 20/09/2023",
    descricao:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, deleniti voluptas, voluptate, reiciendis ratione atque nam a omnis nostrum voluptatem consequatur neque repellat esse aperiam eaque iusto error quo excepturi!",
  },
  {
    nome: "X Semana do Direito",
    peridoInscricao: "10/09/2023 - 20/09/2023",
    descricao:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, deleniti voluptas, voluptate, reiciendis ratione atque nam a omnis nostrum voluptatem consequatur neque repellat esse aperiam eaque iusto error quo excepturi!",
  },
  {
    nome: "CONSEPE UNITINS",
    peridoInscricao: "10/09/2023 - 20/09/2023",
    descricao:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, deleniti voluptas, voluptate, reiciendis ratione atque nam a omnis nostrum voluptatem consequatur neque repellat esse aperiam eaque iusto error quo excepturi!",
  },
  {
    nome: "III Semana da Tecnologia",
    peridoInscricao: "10/09/2023 - 20/09/2023",
    descricao:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, deleniti voluptas, voluptate, reiciendis ratione atque nam a omnis nostrum voluptatem consequatur neque repellat esse aperiam eaque iusto error quo excepturi!",
  },
  {
    nome: "Ofinca de LIBRAS",
    peridoInscricao: "10/09/2023 - 20/09/2023",
    descricao:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, deleniti voluptas, voluptate, reiciendis ratione atque nam a omnis nostrum voluptatem consequatur neque repellat esse aperiam eaque iusto error quo excepturi!",
  },
];
