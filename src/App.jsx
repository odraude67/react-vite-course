import TaskList from './components/TaskList'
import TaskForm from './components/TaskForm'

function App(){

  return(
    <>
      {/* <TaskForm createTask = {createTask}/>
      <TaskList deleteTask = {deleteTask} tasks={tasks}/> */}
      <TaskForm/>
      <TaskList/>
    </>
  )
}

export default App;