import './App.css'
import React, { useState } from "react";

function App() {
  const [tasks,setTasks] = useState([]);
  const[todo,setTodo] = useState("");
  const handleChange = (e)=>{
    setTodo(e.target.value);
  }

  const addTask = ()=>{
    setTasks([...tasks,todo]);
  }
  return (
    <div className="app">
      <div className="inputUi">
        <input onChange={handleChange}/>
        <button onClick={addTask}>Add Todo</button>
      </div>

      <div className="tasks">
        {tasks.map((task ,key)=>{
          return <div>
            <h2 key={key}>{task}</h2>
            <button> X </button>
            </div>
        })}
      </div>
    </div>
  );
}

export default App;
