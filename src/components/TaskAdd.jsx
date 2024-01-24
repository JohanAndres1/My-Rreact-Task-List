import { useState } from "react";
import '../CSS/TaskAdd.css'

export default function TaskAdd({ createNewTask }) {
  const [newTask, setNewTasks] = useState("");
  const [newDescription, setNewDescription] = useState("");
  const [error, setError] = useState("")

  const handleSubmit = (i) => {
    i.preventDefault();

    if (newTask.length < 3) {
      setError("El nombre de la tarea debe tener al menos 3 caracteres.");
      return;
    }

    createNewTask(newTask, newDescription)
    setNewTasks("");
    setNewDescription("")
    setError("")
  };

  return (
    <div className="form-box">
      <form onSubmit={handleSubmit}>
        <div className="input-box">
          <input
            id="nombre-tareas"
            type="text"
            value={newTask}
            onChange={(i) => setNewTasks(i.target.value)}
          />
          <label htmlFor="nombre-tarea">Nombre de tarea</label>
        </div>
        <div className="input-box">
          <input 
            id="descripcion-tareas"
            type="text"
            value={newDescription} 
            onChange={(i) => setNewDescription(i.target.value)}
          />
          <label htmlFor="descripcion-tareas">Descripcion (opcional)</label>
        </div>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <button className="button-submit" type="submit">Agregar tarea</button>
      </form>
    </div>
  );
}