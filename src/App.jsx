import { useState, useEffect } from 'react'
import Header from './components/Header'
import TaskAdd from './components/TaskAdd'
import TaskList from './components/TaskList'
import './App.css'

function App() {
  const [tasksItems, setTasksItems] = useState([])
  const [taskId, setTaskId] = useState(1)

  function createNewTask(taskName, taskDescription) {

    if (!tasksItems.find(task => task.title === taskName)) {
      setTasksItems([...tasksItems, { title: taskName, completed: false, id: taskId, description: taskDescription }])
      setTaskId(taskId + 1)
    } else {
      alert('La tarea ya existe')
    }
  }

  function toggleCompleted(task) {
    setTasksItems(
      tasksItems.map(t => 
        t.title === task.title ? {...t, completed : !t.completed} : t
      )
    )
  }

  const deleteTask = (title) => {
    const newTask = [...tasksItems]
    const taskIndex = newTask.findIndex((task) => task.title === title)
    newTask.splice(taskIndex, 1)
    setTasksItems(newTask)
  }

  const editTask = (oldTitle, newTitle, description) => {
    setTasksItems(
      tasksItems.map(task => 
        task.title === oldTitle ? {...task, title: newTitle, description: description} : task
      )
    )
  }

  useEffect(() => {
    const data = localStorage.getItem("tasks")
    if (data) {
      setTasksItems(JSON.parse(data))
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasksItems))
  }, [tasksItems])
  

  return (
    <>
      <Header />
      <TaskAdd createNewTask={createNewTask} />
      <TaskList list={tasksItems} toggleCompleted={toggleCompleted} deleteTask={deleteTask} editTask={editTask} />
    </>
  )
}

export default App