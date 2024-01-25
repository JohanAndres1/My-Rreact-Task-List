import { Button, Input, Stack, Box } from '@chakra-ui/react';
import { useState } from 'react';

export default function TaskAdd({ createNewTask }) {
  const [newTask, setNewTasks] = useState("");
  const [newDescription, setNewDescription] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (newTask.length < 3) {
      setError("El nombre de la tarea debe tener al menos 3 caracteres.");
      return;
    }

    createNewTask(newTask, newDescription);
    setNewTasks("");
    setNewDescription("");
    setError("");
  };

  return (
    <Stack as="form" spacing={4} p={4} borderRadius="lg" bg="gray.100" marginInline="10%" onSubmit={handleSubmit}>
      <Input
        id="nombre-tareas"
        type="text"
        value={newTask}
        onChange={(e) => setNewTasks(e.target.value)}
        placeholder="Nombre de tarea"
      />
      <Input
        id="descripcion-tareas"
        type="text"
        value={newDescription}
        onChange={(e) => setNewDescription(e.target.value)}
        placeholder="Descripción (opcional)"
      />
      {error && <Box as="p" color="red.500">{error}</Box>}
      <Button type="submit" colorScheme="teal" onClick={handleSubmit}>
        Agregar tarea
      </Button>
    </Stack>
  );
}