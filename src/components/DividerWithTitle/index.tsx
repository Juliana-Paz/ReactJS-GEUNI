import { Box, Heading, Stack, Text } from "@chakra-ui/react";
import { toEditorSettings } from "typescript";
import Footer from "../Footer";
import Navbar from "../Navbar";

export default function DividerWithTitle({ title, ...props }: any) {
  return (
    <>
      <Stack {...props} paddingBottom="15px" alignItems="center">
        <Text textAlign="center" fontSize={"1.3rem"} fontWeight="500">
          {title}
        </Text>
        <Box
          h="1px"
          w="100%"
          borderColor="gray.200"
          borderBottomWidth="1px"
          shadow="sm"
        ></Box>
      </Stack>
    </>
  );
}
