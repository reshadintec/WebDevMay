import React, { useState } from "react";

function App() {
  const [age, setAge] = useState(0);
  const changeValue = () => {
    setAge(age + 1);
  };
  return (
    <div className="app">
      {age} <button onClick={changeValue}> Increase Age </button>
    </div>
  );
}

export default App;
