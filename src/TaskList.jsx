/* Ya no las necesita despues de pasarlo a App */
/* import { useEffect, useState } from 'react' */

/* Queremos mostrar estos datos en pantalla
    Entonces, tenemos que guardarlos en un estado */
/* console.log(tasks)  Eliminado al momento de poner el alias*/

/* Tambien podriamos pasarle los props de esta forma */
/* function TaskList({tasks}){ */
function TaskList(props){
    /* Queremos que cuando se cargue el componente, se le 
        Asignen las tareas que tenemos en nuestro arreglo,
        pero solo cuando se cargue el componente (1 sola vez) */
    /* De momento no cargara nada, porque interpreta tasks como la misma
        variable, despues de la funcion se toma como un arreglo vacio
        Y entonces hasta este punto, igual lo esta tomando como vacio
        
        Entonces, tenemos que usar un alias */
    /* useEffect(() =>{
        setTasks(tasks)
    }, []) */

    if(props.tasks.length === 0){
        return <h1>No hay tareas aun</h1>
    }

    return(
        /* OJO con las llaves y los parentesis xdd */
        <div>
            {props.tasks.map((task) => (
                <div key={task.id}>
                    {/* <div>Tarea</div> */}
                    <h1>{task.title}</h1>
                    <p>{task.description}</p>
                </div>
            ))}
        </div>
    )
}

export default TaskList