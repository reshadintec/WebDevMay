import './App.css'
import React, { useState } from "react";

function App() {
  const [todoList,setTodoList] = useState([]);
  const [newTask,setNewTask] = useState("");
  const handleChange = (e)=>{
    setNewTask (e.target.value);
  };
  const addTask = ()=>{
    setTodoList([...todoList,newTask]);
  };

  const deleteTask = (taskName)=>{
    setTodoList(todoList.filter((task)=> task !== taskName));
  };
  
  return (
    <div className="app">
      <div className='addTask'>
        <input onChange={handleChange}/>
        <button onClick={addTask}>Add New Task</button>        
      </div>
      <div className='list'>
      {todoList.map((task)=>{
        return <div>
          <h2>{task}</h2>
          <button onClick={()=>deleteTask(task)}>X</button>
        </div>
      })}
      </div>
    </div>
  );
}

export default App;
