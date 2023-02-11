import { useContext } from "react"
import {TaskContext} from '../context/TaskContext'

/* En este caso no podemos pasar task desde el contexto, porque en este caso TaskList lo esta recorriendo
    Entonces eso si lo tenemos que pasar como parametro, o sea es algo que se va ejecutando conforme
    va recorriendo el arreglo, no es algo que tengamos fijo en el estado */
    
    /* Pero el taskDelete, no, entonces ese si se lo podemos pasar por el contexto */

/* function TaskCard({task, deleteTask}){ */
function TaskCard({task}){

    const {deleteTask} = useContext(TaskContext)

    return(
        <div>
            <h1>{task.title}</h1>
            <p>{task.description}</p>
            <button onClick={() => deleteTask(task.id)}>
                Eliminar Tarea
            </button>
        </div>
    );
}

export default TaskCard;