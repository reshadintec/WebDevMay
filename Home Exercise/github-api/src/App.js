import './App.css'
import React, { useState } from "react";

function App() {
  const [count , setCount] = useState(0);
  return (
    <div className="app">
      <button onClick={()=>{setCount(count+1)}}>Increase</button>
      <button onClick={()=>{setCount(count-1)}}>Decrease</button>
      <button onClick={()=>{setCount(0)}}>Reset</button>
      {count}
    </div>
  );
}

export default App;
