import { SimpleGrid } from "@chakra-ui/react";
import Card from "../components/Cards";
import Template from "../components/Template";
import { EVENTOS } from "../mock/eventos";

export default function Home() {
  return (
    <Template tituloPagina="Eventos Disponíveis">
      <SimpleGrid columns={[1, 1, 2]} spacing={7}>
        {EVENTOS.map((evento, key) => {
          return <Card evento={evento} key={key} />;
        })}
      </SimpleGrid>
    </Template>
  );
}
