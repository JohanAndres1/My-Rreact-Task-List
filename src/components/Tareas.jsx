import TaskList from './TaskList';
import useTaskManager from '../hooks/useTaskManager'
import TaskAdd from './TaskAdd'

function Tareas() {
  const { tasksItems, createNewTask, toggleCompleted, deleteTask, editTask } =
    useTaskManager();

  return (
    <div>
      <h1>Lista de Tareas</h1>
      <TaskAdd createNewTask={createNewTask} />
      <TaskList
        list={tasksItems}
        toggleCompleted={toggleCompleted}
        deleteTask={deleteTask}
        editTask={editTask}
      />
    </div>
  );
}

export default Tareas;
