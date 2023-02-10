import { useState } from "react";

function TaskForm({createTask}){

    const [title, setTitle] = useState("");
    
    const handleSubmit = (e) => {
        e.preventDefault();
        /* Hasta aqui ya tenemos un nuevo objeto que podemos añadir
            Al objeto de arreglos */
        
        /* (5) */
        /* const newTask = {
            title,
            id: 4,
        } */
        /* En lugar de mostrarlo por consola.. */
        
        /* (5) */
        /* console.log(newTask) */

        /* Se lo das como valor a la funcion que estas recibiendo
            Esta funcion no esta creada aqui, sino en App,
            Es como si se estuviera llamando y como en App
            Si tiene acceso al arreglo, puede alterarlo y agregarle
            La nueva tarea */
        
        /* (5) */
        /* createTask(newTask) */

        /* Esta es la forma de conectar el componente App con TaskFrom
            a traves de un prop  */

        /* Hasta aqui todo bien, perooo,.nos va a lanzar un error ya que el id
            De cada elemento que se añada nuevo, va a ser el mismo y no lo
            podemos modificar desde aqui ya que no tenemos acceso a la longitud del arreglo
            Pero quiza si lo podriamos hacer si se nos pasa la longitud del arreglo como
            parametro y luego le devolvemos el objeto a App
            Pero, para hacerlo de otra forma, podemos hacerlo como sigue: */

        /* 5 */
        /* Solo le pasamos el titulo 
            Y entonces en ya podemos modificar lo del indice*/
        createTask(title);

    }

    return(
        <form onSubmit={handleSubmit}>
            <input placeholder="Escribe tu tarea" 
            onChange={(e) => {setTitle(e.target.value)}}/>
            <button>Guardar</button>
        </form>
    );
}

export default TaskForm;