import { Box, Heading, Text } from "@chakra-ui/react";

function SobreNosotros() {
  return (
    <Box maxW="800px" mx="auto" padding="2rem" marginTop="56px">
      <Heading mb="2rem">Sobre Nosotros</Heading>
      <Box bg="gray.100" p="4" borderRadius="md" mb="4">
        <Heading as="h3" mb="4" fontSize="22px" color="blue.600">Aplicación de TasksLists con React</Heading>
        <Text>
          <strong>Creación de Tareas:</strong> Los usuarios pueden agregar
          nuevas tareas a la lista. Cada tarea tiene un nombre, una descripción
          y un estado que indica si está completada o no.
        </Text>
        <Text>
          <strong>Visualización de Tareas:</strong> La lista de tareas se
          muestra en la página principal de la aplicación. Cada tarea se
          presenta con su nombre, descripción y un indicador visual del estado
          de completado.
        </Text>
        <Text>
          <strong>Edición de Tareas:</strong> Se proporciona la capacidad de
          editar el nombre y la descripción de una tarea existente. La edición
          se realiza a través de un formulario interactivo.
        </Text>
        <Text>
          <strong>Eliminación de Tareas:</strong> Los usuarios pueden eliminar
          tareas de la lista. Se incluyen botones de eliminación junto a cada
          tarea para facilitar esta acción.
        </Text>
        <Text>
          <strong>Persistencia de Datos:</strong> La aplicación utiliza
          localStorage para almacenar las tareas, lo que permite a los usuarios
          conservar su lista incluso después de cerrar o recargar la página.
        </Text>
      </Box>
      <Box bg="gray.100" p="4" borderRadius="md">
        <Heading as="h3" mb="4" fontSize="22px" color="blue.600">Tecnologías Utilizadas</Heading>
        <Box>
          <Text>
            <strong>React:</strong> El proyecto utiliza la biblioteca de
            JavaScript React para construir la interfaz de usuario de forma
            eficiente y modular.
          </Text>
          <Text>
            <strong>React Hooks:</strong> Se emplean hooks como useState,
            useEffect y useReducer para gestionar el estado y los efectos
            secundarios de la aplicación de manera más clara y concisa.
          </Text>
          <Text>
            <strong>React Router:</strong> Se utiliza React Router para la
            navegación entre las diferentes secciones de la aplicación,
            permitiendo una experiencia de usuario fluida y coherente.
          </Text>
          <Text>
            <strong>JavaScript (ES6+):</strong> La lógica de la aplicación se
            implementa utilizando JavaScript moderno, aprovechando
            características como destructuring, arrow functions y template
            literals.
          </Text>
          <Text>
            <strong>CSS:</strong> Se aplica estilos CSS para mejorar la
            presentación visual de la aplicación. Se utilizan estilos simples y
            efectivos para proporcionar una interfaz de usuario limpia y
            agradable.
          </Text>
          <Text>
            <strong>localStorage:</strong> Se hace uso de la capacidad de
            almacenamiento local del navegador mediante localStorage para
            persistir los datos de las tareas entre sesiones.
          </Text>
        </Box>
      </Box>
    </Box>
  );
}

export default SobreNosotros;