import TaskList from './TaskList'
import TaskForm from './TaskForm'
import {tasks as data} from './tasks'
import { useState, useEffect } from 'react';

function App(){

  const [tasks, setTasks] = useState([]);

    useEffect(() =>{
        setTasks(data);
    }, [])

  /* function createTask(taskTitle){ */
  function createTask(task){
    setTasks([...tasks, {
      /* title: taskTitle, */
      title: task.title,
      id: tasks.length,
      /* description: "Nueva tarea" */
      description: task.description
    }])
  }

  return(
    <>
      <TaskForm createTask = {createTask}/>
      <TaskList tasks={tasks}/>
    </>
  )
}

export default App;