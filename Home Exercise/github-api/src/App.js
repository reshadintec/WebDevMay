import './App.css'
import React, { useState } from "react";

function App() {
  const [todos,setTodos] = useState([]);
  const [todo,setTodo] = useState("");
  const addTodo = (e)=>{
    setTodo (e.target.value);
  };
  const addTodos = ()=>{
    setTodos([...todos,todo]);
  };

  const deleteTodo = (taskName)=>{
    const newTodos = todos.filter((task)=>{
     
      return task !== taskName;
     
    });
  setTodos(newTodos);    
  };
  return (
    <div className="app">
      <div className='inputs'>
        <input onChange={addTodo}/>
        <button onClick={addTodos}>Add New Task</button>        
      </div>
      <div className='uiDesign'>
      {todos.map((task)=>{
        return <div>
          <h2>{task}</h2>
          <button onClick={()=>deleteTodo(task)}>X</button>
        </div>
      })}
      </div>
    </div>
  );
}

export default App;
