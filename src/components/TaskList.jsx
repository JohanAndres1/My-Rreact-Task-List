import { Box, List } from "@chakra-ui/react";
import Task from "./Task";

export default function TaskList({ list, toggleCompleted, deleteTask, editTask }) {
  return (
    <Box marginInlineEnd="20%">
      <List spacing={3}>
        {list.map((task) => (
          <Task
            id={task.id}
            key={task.title}
            title={task.title}
            completed={task.completed}
            description={task.description}
            toggleCompleted={toggleCompleted}
            deleteTask={deleteTask}
            editTask={editTask}
          />
        ))}
      </List>
    </Box>
  );
}
