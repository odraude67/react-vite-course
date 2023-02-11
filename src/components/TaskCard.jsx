import TaskContext from '../context/TaskContext'

function TaskCard({task, deleteTask}){

    /* function mostrarAlerta(){
        alert(task.id);

    }*/

    return(
        <div>
            <h1>{task.title}</h1>
            <p>{task.description}</p>
            {/* Cada vez que hacemos click, estamos accediendo al arreglo de tareas
                Esto es util, porque significa que desde aqui podremos eliminar */}
            {/* <button onClick={deleteTask}> */}
            <button onClick={() => deleteTask(task.id)}>
                Eliminar Tarea
            </button>
        </div>
    );
}

export default TaskCard;