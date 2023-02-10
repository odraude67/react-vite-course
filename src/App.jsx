import TaskList from './TaskList'
import TaskForm from './TaskForm'
import {tasks as data} from './tasks'
import { useState, useEffect } from 'react';

function App(){

  const [tasks, setTasks] = useState([]);

    useEffect(() =>{
        setTasks(data);
    }, [])

  /* Copia todo el arreglo de tareaas, y agrega una tarea nueva */
  /* function createTask(task){
    setTasks([...task, task])
  } */

  /* Ahora, pada poder modificar lo del indice... */
  /* En vez de pasarle un elemento a create tasks, vamos a pasarle un objeto completo */
  function createTask(taskTitle){
    setTasks([...tasks, {
      title: taskTitle,
      id: tasks.length,
      description: "Nueva tarea"
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