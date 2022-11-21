import {
  Box,
  Button,
  Flex,
  Image,
  Input,
  InputGroup,
  InputLeftElement,
  Link,
  Stack,
  Text,
} from "@chakra-ui/react";
import { FaUserAlt } from "react-icons/fa";
import { RiLockPasswordFill } from "react-icons/ri";
import { MdArrowBackIosNew } from "react-icons/md";

const currentYear = new Date().getFullYear();

export default function Inscricao() {
  return (
    <Stack
      backgroundImage="url('https://www.unitins.br/PortalAluno/Content/img/bg-login-web.jpg')"
      backgroundSize="cover"
      backgroundAttachment="fixed"
      minHeight="100vh"
      w="100%"
      h="100%"
      justifyContent="center"
    >
      <MdArrowBackIosNew color="#E2E8F0" />
      <Stack alignItems="center">
        <Stack
          borderRadius="5px"
          backgroundColor="white"
          padding="2rem"
          h="60%"
          w={["90%", "80%", "25%"]}
          shadow="md"
        >
          <Flex justifyContent="center" paddingBottom="30px">
            <Link href="https://www.unitins.br/nPortal/" isExternal>
              <Image
                src="/images/LogoUnitins.png"
                width="auto"
                height="60px"
                alt="LogoUnitins"
              ></Image>
            </Link>
          </Flex>

          <Text fontWeight="600" fontSize="md">
            GEUNI
          </Text>
          <Text paddingBottom="10px" fontSize="xs">Acesse utilizando seu E-mail:</Text>
          <InputGroup>
            <InputLeftElement pointerEvents="none">
              <FaUserAlt color="#E2E8F0" />
            </InputLeftElement>
            <Input variant='flushed' type="eamil" placeholder="Login" />
          </InputGroup>
          <InputGroup>
            <InputLeftElement pointerEvents="none">
              <RiLockPasswordFill color="#E2E8F0" />
            </InputLeftElement>
            <Input variant='flushed' type="password" placeholder="Senha" />
          </InputGroup>
          <Box>
            <Button
              marginTop="15px"
              fontWeight="400"
              color="white"
              backgroundColor="#004093"
              _hover={{ backgroundColor:"#0a58ca" }}
              _active={{ backgroundColor:"#0a58ca" }}
              size="md"
              width="100%"
              onClick={() => {
                window.open("/listaSolicitacoes", "_self");
              }}
            >
              Logar
            </Button>
          </Box>
        </Stack>
      </Stack>
      <Text color="white" fontSize="xs" textAlign="center">
        © {currentYear} Unitins. Todos os direitos reservados.
      </Text>
    </Stack>
  );
}
