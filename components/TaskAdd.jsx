import { useState } from "react";

export default function TaskAdd({ createNewTask }) {
  const [newTask, setNewTasks] = useState("");
  const [newDescription, setNewDescription] = useState("");


  const handleSubmit = (i) => {
    i.preventDefault();
    createNewTask(newTask, newDescription)
    setNewTasks("");
    setNewDescription("")
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        id="nombre-tareas"
        type="text"
        placeholder="Nombre de tarea"
        value={newTask}
        onChange={(i) => setNewTasks(i.target.value)}
      />
      <input 
        id="descripcion-tareas"
        type="text"
        placeholder="Descripcion"
        value={newDescription} 
        onChange={(i) => setNewDescription(i.target.value)}
      />
      <button type="submit">Agregar tarea</button>
    </form>
  );
}