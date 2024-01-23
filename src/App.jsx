import Header from './components/Header'
import TaskAdd from './components/TaskAdd'
import TaskList from './components/TaskList'
import useTaskManager from './hooks/useTaskManager'
import './App.css'

function App() {
  const { tasksItems, createNewTask, toggleCompleted, deleteTask, editTask } = useTaskManager()

  return (
    <>
      <Header />
      <TaskAdd createNewTask={createNewTask} />
      <TaskList list={tasksItems} toggleCompleted={toggleCompleted} deleteTask={deleteTask} editTask={editTask} />
    </>
  )
}

export default App