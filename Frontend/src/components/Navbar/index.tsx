import {
  Box,
  Button,
  Flex,
  Image,
  Link,
  Popover,
  PopoverTrigger,
  Stack,
  useColorModeValue,
} from "@chakra-ui/react";

export default function Navbar({ isAdm }: any) {
  return (
    <Flex
      flexDirection="column"
      align="center"
      bg={useColorModeValue("gray.50", "gray.900")}
      color={useColorModeValue("gray.700", "gray.200")}
      shadow="md"
    >
      <Link href="https://www.unitins.br/nPortal/" isExternal>
        <Image
          src="/images/LogoUnitins.png"
          width="auto"
          height="65px"
          alt="LogoUnitins1"
          marginTop="4"
        ></Image>
      </Link>

      <Flex
        minH={"60px"}
        py={{ base: 2 }}
        px={{ base: 4 }}
        borderBottom={1}
        borderStyle={"solid"}
        borderColor={useColorModeValue("gray.200", "gray.900")}
        align={"center"}
        width="100%"
        justifyContent="space-between"
      >
        <Box w="90.7px"/>

        <DesktopNav isAdm={isAdm} />

        <Stack
          flex={{ base: 1, md: 0 }}
          justify={"flex-end"}
          direction={"row"}
          spacing={6}
        >
          {isAdm ? (
            <Button
              colorScheme={"blue"}
              size="xs"
              onClick={() => {
                window.open("/", "_self");
              }}
            >
              Sair
            </Button>
          ) : (
            <Button
              colorScheme={"blue"}
              size="xs"
              onClick={() => {
                window.open("/login", "_self");
              }}
            >
              Área Restrita
            </Button>
          )}
        </Stack>
      </Flex>
    </Flex>
  );
}

const DesktopNav = ({ isAdm }: any) => {
  const linkColor = "#003c84";
  const linkHoverColor = "#0056b3";

  if (isAdm) {
    return (
      <Stack direction={"row"} spacing={4}>
        {ADM_NAV_ITEMS.map((navItem) => (
          <Box key={navItem.label}>
            <Popover trigger={"hover"} placement={"bottom-start"}>
              <PopoverTrigger>
                <Link
                  p={2}
                  href={navItem.href ?? "#"}
                  fontSize={"sm"}
                  fontWeight={700}
                  color={linkColor}
                  _hover={{
                    textDecoration: "none",
                    color: linkHoverColor,
                  }}
                  textTransform="uppercase"
                >
                  {navItem.label}
                </Link>
              </PopoverTrigger>
            </Popover>
          </Box>
        ))}
      </Stack>
    );
  }
  return (
    <Stack direction={"row"} spacing={4}>
      {NAV_ITEMS.map((navItem) => (
        <Box key={navItem.label}>
          <Popover trigger={"hover"} placement={"bottom-start"}>
            <PopoverTrigger>
              <Link
                p={2}
                href={navItem.href ?? "#"}
                fontSize={"sm"}
                fontWeight={700}
                color={linkColor}
                _hover={{
                  textDecoration: "none",
                  color: linkHoverColor,
                }}
                textTransform="uppercase"
              >
                {navItem.label}
              </Link>
            </PopoverTrigger>
          </Popover>
        </Box>
      ))}
    </Stack>
  );
};

const NAV_ITEMS = [
  {
    label: "Inscrever em Eventos",
    href: "/",
  },
  {
    label: "Registrar Frequência",
    href: "/registrarFrequencia",
  },
  {
    label: "Emitir Certificado",
    href: "/emitirCertificado",
  },
  {
    label: "Solicitar Evento",
    href: "/formSolicitacao",
  },
];

const ADM_NAV_ITEMS = [
  {
    label: "Lista de Solicitações",
    href: "/listaSolicitacoes",
  },
  {
    label: "Lista de Inscricões",
    href: "/listaInscricoes",
  },
];
