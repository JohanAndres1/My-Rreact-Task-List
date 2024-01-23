import { useState, useEffect } from 'react';

const useTaskManager = () => {
  const [tasksItems, setTasksItems] = useState([]);
  const [taskId, setTaskId] = useState(1);

  const createNewTask = (taskName, taskDescription) => {
    if (!tasksItems.find(task => task.title === taskName)) {
      setTasksItems([...tasksItems, { title: taskName, completed: false, id: taskId, description: taskDescription }]);
      setTaskId(taskId + 1);
    } else {
      alert('La tarea ya existe');
    }
  };

  const toggleCompleted = (task) => {
    setTasksItems(
      tasksItems.map(t => 
        t.title === task.title ? {...t, completed : !t.completed} : t
      )
    );
  };

  const deleteTask = (title) => {
    const newTask = [...tasksItems];
    const taskIndex = newTask.findIndex((task) => task.title === title);
    newTask.splice(taskIndex, 1);
    setTasksItems(newTask);
  };

  const editTask = (oldTitle, newTitle, description) => {
    setTasksItems(
      tasksItems.map(task => 
        task.title === oldTitle ? {...task, title: newTitle, description: description} : task
      )
    );
  };

  useEffect(() => {
    const data = localStorage.getItem('tasks');
    if (data) {
      setTasksItems(JSON.parse(data));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasksItems));
  }, [tasksItems]);

  return {
    tasksItems,
    createNewTask,
    toggleCompleted,
    deleteTask,
    editTask,
  };
};

export default useTaskManager;
