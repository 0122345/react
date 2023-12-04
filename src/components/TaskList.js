import { useState } from "react";
import { TaskCard } from "./TaskCard";
import './tasklist.css';


export const TaskList = ({tasks, setTasks}) => {
   
  const [show, setShow] = useState(true);
  
  function handleDelete(id) {
    setTasks(tasks.filter(task => task.id !== id ));
  }
 
  return (
    <div className="tasklist">
    <h1>Task List </h1>
    <ul>
     <button className="trigger" onClick={() => setShow(!show)}>{show ? "hide" : "show"}</button>
     { show && tasks.map((task) => (
       <TaskCard key={task.id} task={task} handleDelete={handleDelete}/>
     ))
      }
    </ul>
    </div>
  );
}
