import TaskCard from "./TaskCard"

function TaskList(props){

    if(props.tasks.length === 0){
        return <h1>No hay tareas aun</h1>
    }

    /* Ahora, cada vez que se cree un componente TaskCard
        Y le va a pasar una tarea
        Le pasamos un prop, el valor sera la tarea
            Que se esta recorriendo en ese momento  */

    return(
        <div>
            {props.tasks.map((task) => (
                <TaskCard key={task.id} task={task}/>
            ))}
        </div>
    )
}

export default TaskList