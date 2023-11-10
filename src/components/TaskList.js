import { useState } from "react";
import { TaskCard } from "./TaskCard";
import './tasklist.css';
import {BoxCard} from './BoxCard';


export const TaskList = (props) => {
   
    
  const [tasks,setTasks] = useState([
    {
    id: 10,name: "Record", completed: false},
  {
    id: 21,
    name: "kubimenya",
    completed: true
  },{
    id: 34,
    name: "Nzaza",
    completed: false
  }]);
  const [show, setShow] = useState(true);
  
  function handleDelete(id) {
    setTasks(tasks.filter(task => task.id !== id ));
  }

  return (
    <div className="tasklist">
    <h1>Task List {props.title} {props.subtitle}</h1>
    <ul>
     <button className="trigger" onClick={() => setShow(!show)}>{show ? "hide" : "show"}</button>
     { show && tasks.map((task) => (
       <TaskCard key={task.id} task={task} handleDelete={handleDelete}/>
     ))
      }
    </ul>
    <BoxCard result ="success">
      <p className="title">Lorem ipsum dolor sit amet.</p>
      <p className="description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis accusantium laborum omnis!</p>
    
    </BoxCard>
      
     <BoxCard result='warning'>
      <p className="title">
        Lorem ipsum dolor sit.
      </p>

      <p className="description">
         Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
         Fugit perspiciatis sunt beatae.
      </p>

     </BoxCard>

     { <BoxCard result='alert'>
     <p className="title">
        Lorem ipsum dolor sit.
      </p>

      <p className="description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
           Consectetur eos quis sed mollitia fugiat! Excepturi tempore 
           totam similique omnis!

      </p>

     </BoxCard> 
    }

    </div>
  );
}
