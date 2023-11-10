import "./taskCard.css";

export const TaskCard = ({ task, handleDelete}) => {
  return (
    <li className={`taskcard ${task.completed ? "completed" : "uncompleted"}`}>
        <span>
        {task.id} - {task.name}  
        </span>
        <button onClick={() => handleDelete(task.id)} className='delete'>Delete</button>
    </li>
  )
}
