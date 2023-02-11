import { useContext } from "react";
import {TaskContext} from '../context/TaskContext'

function TaskCard({task, deleteTask}){

    /* Para utilizar el contexto
        Pero podemos tener varios contextos, por eso es importante
        El nombre del contexto */

    const valor = useContext(TaskContext)
    console.log(valor)

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