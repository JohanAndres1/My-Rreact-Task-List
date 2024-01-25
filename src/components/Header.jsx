import { Box, Heading } from "@chakra-ui/react";

export default function Header() {
  return (
    <Box as="header" textAlign="center" padding="2rem" marginTop="56px" >
      <Heading as="h1">
        Lista de Tareas
      </Heading>
    </Box>
  );
}