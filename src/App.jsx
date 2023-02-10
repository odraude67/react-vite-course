import TaskList from './components/TaskList'
import TaskForm from './components/TaskForm'
import {tasks as data} from './tasks'
import { useState, useEffect } from 'react';

function App(){

  const [tasks, setTasks] = useState([]);

    useEffect(() =>{
        setTasks(data);
    }, [])

  function createTask(task){
    setTasks([...tasks, {
      title: task.title,
      id: tasks.length,
      description: task.description
    }])
  }

  function deleteTask(taskId){
    /* console.log(tasks)
    console.log(taskId) */
    /* Ya tenemos aqui los dos valores que necesitamos de TaskCard 
      Entonces ya podemos hacer lo siguiente*/

    /* Por cada tarea que recorras quiero que confirmes si el id es igual
      Al id que se le esta pasando de TaskCard, se van a quitar todos los que
      sean iguales al id que se esta pasando */

    /* A su vez, esto nos devuelve un nuevo elemento, entonces lo tenemos que meter
      a setTasks (al estado) */
    /* tasks.filter(task => task.id != taskId) */
    setTasks(tasks.filter(task => task.id != taskId));
  }

  return(
    <>
      <TaskForm createTask = {createTask}/>
      <TaskList deleteTask = {deleteTask} tasks={tasks}/>
    </>
  )
}

export default App;