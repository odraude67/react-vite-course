import { useState } from "react";

function TaskForm({createTask}){

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    
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