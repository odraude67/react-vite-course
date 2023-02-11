/* import { useState } from "react"; */
import { useState, useContext } from "react";
import {TaskContext} from '../context/TaskContext'

function TaskForm(){
/* function TaskForm({createTask}){ */

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    /* Este va a ser un arreglo que va a representar todos los elementos
        Que tenemos en el componente de contexto, es decir el arreglo de tareas
        La funcion de crear y eliminar */
    
    /* const value = useContext(TaskContext) */

    /* Pero, de todos los valores que nos da, no los queremos, tan solo queremos para este componente
        La funcion de createTask, entonces.. */

    const {createTask} = useContext(TaskContext)
    
    const handleSubmit = (e) => {
        e.preventDefault();
        createTask({
            title,
            description
        });
        setTitle('')
        setDescription('')
    }

    return(
        <form onSubmit={handleSubmit}>
            <input placeholder="Escribe tu tarea" 
            onChange={(e) => setTitle(e.target.value)}
            value={title}
            /* Propiedad para que el cursor este automaticamente sobre el input
                Al momento de entrar o recargar la pagina */
            autoFocus/>

            <textarea placeholder="Descripcion de la tarea"
            onChange={e => setDescription(e.target.value)}
            value={description}></textarea>

            <button>Guardar</button>
        </form>
    );
}

export default TaskForm;