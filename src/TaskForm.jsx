import { useState } from "react";

function TaskForm(){

    const [title, setTitle] = useState("");
    const handleSubmit = (e) => {
        /* Cancela el comportamiento por defecto del formulario
            De recargar la pagina cuando se envie */
        e.preventDefault();
        console.log(title);
    }

    return(
        <form onSubmit={handleSubmit}>
            <input placeholder="Escribe tu tarea" 
            /* onChange={(e) => {console.log(e.target.value)}}/> */
            /* Con esto hacemos que en vez que se imprima en consola, se guarde
                En la variable title */
            onChange={(e) => {setTitle(e.target.value)}}/>
            <button>Guardar</button>
        </form>
    );
}

export default TaskForm;