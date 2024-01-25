import { Heading } from "@chakra-ui/react";
import Header from "./Header";

function Home() {
  return (
    <>
      <Header />
      <Heading as="p" textAlign="center" fontSize="18px" fontWeight="200" padding="1rem">
        Bien venidos TasksLists, aquí vas a poder organizar tus deberes y
        proyectos en una lista por categorías. Crea o edita listas para agregar
        tareas.
      </Heading>
    </>
  );
}

export default Home;
