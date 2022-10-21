//It is all about Jsx, components , props, ternary operators and Lists 

import React from "react";
import User from "./components/User";
import Jobs from "./components/Jobs";
import Persons from "./components/Persons";
import "./App.css";
function App() {
  const isRed = false;
  const showPara = true;
  const withMargin = false;
  const names = ["Ahmad", "Mahmoud", "Kalbi", "Maqsoud", "Nasir", "Ramish"];
  const persons = [
    {name: "Ahmad",age: 20},
    {name: "Reza", age: 22},
    {name: "Ali Ahmad", age: 16},
    {name: "Mohammad", age: 40,}
  ];

  const planets = [
    { name: "Mars" , isGasPlanet: false },
    { name: "Earth" , isGasPlanet: false},
    { name: "Jupiter" , isGasPlanet: true},
    { name: "Venus" , isGasPlanet: false},
    { name: "Neptune" , isGasPlanet: true},
    { name: "Uranus" , isGasPlanet: true}
  ]

  return (
    <div>
      <h1
        style={{
          color: isRed ? "red" : "blue",
        }}
      >
        Displaying Text with Conditions
      </h1>
      {persons.map((person,key) => {
        return <Persons name={person.name} age={person.age} />;
      })}
      <User name="Pedro" age={21} email="hllo@gmail.com" />
      <Jobs salary={1000} positon="Web-Dev" company="Intec" />
      <User name="Reshad" age={30} email="reshad@gmail.com" />
      <Jobs salary={2000} positon="Social Media Expert" company="Amazon" />
      {showPara && (
        <p
          style={{
            margin: withMargin ? "20px 50px" : "10px",
            color: isRed ? "black" : "blue",
          }}
        >
          If you're using TypeScript, you can configure the baseUrl setting
          inside the compilerOptions of your project's tsconfig.json file. Now
          that you've configured your project to support absolute imports, if
          you want to import a module located at src/components/Button.js, you
          can import the module like so:
        </p>
      )}
      <h2>These are the names in array:</h2>
      {names.map((name, key) => {
        return <h6 key={key}>{name}</h6>;
      })}

      {
        planets.map((planet,key)=>{
            return planet.isGasPlanet && <h1>{planet.name}</h1>
        })
      }
    </div>
  );
}

export default App;
