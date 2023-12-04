import Header from './components/Header';
import { useState } from 'react';
import { Footer } from './components/Footer';
import { TaskList } from './components/TaskList';
import { AddTask } from './components/AddTask';

import './App.css';


 function App() {
     
  const [tasks,setTasks] = useState([]);
 
      
   return (
    <div>
       <div className="App">
         <Header />
         <main>
          <AddTask tasks={tasks} setTasks={setTasks}/>
          <TaskList tasks={tasks} setTasks={setTasks}/>
         </main>
          <Footer />
        </div>
    </div>
   );
 }
 
export default App;