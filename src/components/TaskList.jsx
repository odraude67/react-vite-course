import TaskCard from "./TaskCard"
import { useContext } from "react"
import {TaskContext} from '../context/TaskContext'

/* function TaskList({tasks, deleteTask}){ */
function TaskList(){

    /* Nuevamente, del objeto solo quiero que me traigas el arreglo de las tareas y el deleteTask  */

    /* const {tasks, deleteTask} = useContext(TaskContext) */

    /* Aunque, no necesariamente necesitamos pasarle el deleteTask a TaskList
        PORQUE directamente TaskCard puede pasar directamente a el de la misma forma, entonces.... */

    const {tasks} = useContext(TaskContext)

    if(tasks.length === 0){
        return <h1>No hay tareas aun</h1>
    }

    return(
        <div>
            {tasks.map((task) => (
                <TaskCard key={task.id} task={task}/>
            ))}
        </div>
    )
}

export default TaskList