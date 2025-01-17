import './App.css'
import React, { useState } from "react";
import { Task } from './Task';

function App() {
  
// const deleteTask = (taskName)=>{
    
  // };
  const [todoList,setTodoList] = useState([]);
  const [newTask,setNewTask] = useState("");
  const [completed, setCompleted] = useState(false);
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
  const completeTask = (id)=>{
    todoList.map((task)=>{
      
    })
    
  }
  return (
    <div className="app">
      <div className='addTask'>
        <input onChange={handleChange}/>
        <button onClick={addTask}>Add Task</button>  
      </div>
      <div className='list'>
      {todoList.map((task)=>{
        return <Task taskName ={task.taskName} id={task.id} deleteTask={deleteTask} completeTask={completeTask} completed={completed}/>
      })}
      </div>
    </div>
  );
}

export default App;
