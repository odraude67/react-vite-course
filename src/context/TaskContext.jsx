import { createContext } from "react";

/* Nombre del contexto -> TaskContext */
export const TaskContext = createContext()

/* Componente que engloba al resto de los componentes */
export function TaskContextProvider(props){

    /* Creamos una variable que puede ser accedida por los demas
        Componentes, pero tenemos que guardarla dentro del Provider  */
    let x = 20

    return(
        /* La guardamos en el provider */
        <TaskContext.Provider value = {x}>
            {props.children}
        </TaskContext.Provider>
    );
}