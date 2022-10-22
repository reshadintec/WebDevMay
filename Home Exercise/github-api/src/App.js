import './App.css'
import React, { useState } from "react";

function App() {
  
// const deleteTask = (taskName)=>{
    
  // };
  const [todoList,setTodoList] = useState([]);
  const [newTask,setNewTask] = useState("");
  const handleChange = (event)=>{
    setNewTask(event.target.value)
  };
  const addTask = (()=>{
    const task = {
      id: todoList.length===0 ? 1 : todoList[todoList.length-1].id +1 ,
      taskName: newTask
    }
    setTodoList([...todoList,task]);
  });
  const deleteTask = (id)=>{
    const newTodolist = todoList.filter((task)=>{
      return task.id !== id;
    })
    setTodoList(newTodolist);
  }
  return (
    <div className="app">
      <div className='addTask'>
        <input onChange={handleChange}/>
        <button onClick={addTask}>Add Task</button>  
      </div>
      <div className='list'>
      {todoList.map((task)=>{
        return <div>
          <h2>{task.id}:{task.taskName}</h2>
          <button onClick={()=>deleteTask(task.id)}>X</button>
          </div>
      })}
      </div>
    </div>
  );
}

export default App;
