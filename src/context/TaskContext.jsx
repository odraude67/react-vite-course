import { createContext, useState, useEffect} from "react";
import {tasks as data} from '../tasks'

export const TaskContext = createContext()

export function TaskContextProvider(props){

    const [tasks, setTasks] = useState([]);

    function createTask(task){
        setTasks([...tasks, {
            title: task.title,
            id: tasks.length,
            description: task.description
        }])
    }
    
    function deleteTask(taskId){
    setTasks(tasks.filter(task => task.id != taskId));
    }

    /* Le tenemos que pasar la ruta de donde va a jalar los datos
        Que va almacenar cuando se cree el componente de contexto */
    useEffect(() =>{
        setTasks(data);
    }, [])
    
    return(
        <TaskContext.Provider value={{
            /* tasks: tasks,
            deleteTask: deleteTask,
            createTask: createTask */
            tasks,
            createTask,
            deleteTask
        }}>
            {props.children}
        </TaskContext.Provider>
    );
}