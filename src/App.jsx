import Header from '../components/Header'
import TaskList from '../components/TaskList'
import './App.css'

function App() {
  const initialTasks = [
    { id: 1, title: 'Tarea 1', description: 'soy una tarea', completed: false },
    { id: 2, title: 'Tarea 2', description: 'soy una tarea', completed: true },
    { id: 3, title: 'Tarea 3', description: 'soy una tarea', completed: false }
  ]

  return (
    <>
      <Header />
      <TaskList list={initialTasks} />
    </>
  )
}

export default App