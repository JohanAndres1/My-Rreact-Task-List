import { Flex, Box } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

function Menu() {
  return (
    <Flex
      as="nav"
      align="center"
      justify="space-evenly"
      wrap="wrap"
      padding="1rem"
      bg="blue.500"
      color="white"
      position="fixed"
      top="0"
      width="100%"
      zIndex="1000"
    >
      <Box>
        <Link to="/">
          Home
        </Link>
      </Box>
      <Box>
        <Link to="/tareas">
          Tareas
        </Link>
      </Box>
      <Box>
        <Link to="/sobre-nosotros">
          Sobre Nosotros
        </Link>
      </Box>
    </Flex>
  );
}

export default Menu;