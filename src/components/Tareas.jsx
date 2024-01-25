import TaskList from './TaskList';
import useTaskManager from '../hooks/useTaskManager'
import TaskAdd from './TaskAdd'
import { Box, Grid, GridItem, Heading } from "@chakra-ui/react"

function Tareas() {
  const { tasksItems, createNewTask, toggleCompleted, deleteTask, editTask } =
    useTaskManager();

  return (
    <Box mt="56px">
      <Heading as="h1" textAlign="center" padding="2rem" mb="4">Lista de Tareas</Heading>
      <Grid templateColumns="repeat(2, 1fr)">
        <GridItem colSpan={1}>
          <TaskAdd createNewTask={createNewTask} />
        </GridItem>
        <GridItem colSpan={1}>
          <TaskList
            list={tasksItems}
            toggleCompleted={toggleCompleted}
            deleteTask={deleteTask}
            editTask={editTask}
          />
        </GridItem>
      </Grid>
    </Box>
  );
}

export default Tareas;
