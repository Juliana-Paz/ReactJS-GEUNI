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
  Text
} from "@chakra-ui/react";
import { useState } from "react";
import { FaUserAlt } from "react-icons/fa";
import { MdArrowBackIosNew } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";

const currentYear = new Date().getFullYear();

export default function Login() {

  const [login, setLogin] = useState("");
  const [senha, setSenha] = useState("");

  const logar = () => {
    const usuario = {
      login: login,
      senha: senha,
    };
    console.log(usuario);
  };

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
      <Flex position="fixed" top="15px" left="15px" alignItems="center" cursor="pointer" gap="2" onClick={() => history.back()}>
        <MdArrowBackIosNew color="#E2E8F0" size="18px" />
        <Text color="white" fontSize="16px" pt="1px">Voltar</Text>
      </Flex>
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
            <Input variant='flushed' type="eamil" placeholder="Login" onChange={(e) => setLogin(e.target.value)}/>
          </InputGroup>
          <InputGroup>
            <InputLeftElement pointerEvents="none">
              <RiLockPasswordFill color="#E2E8F0" />
            </InputLeftElement>
            <Input variant='flushed' type="password" placeholder="Senha" onChange={(e) => setSenha(e.target.value)} />
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
                logar()
                window.open("/listaSolicitacoes", "_self")
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
