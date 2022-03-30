import './App.css';
import Cards from './Components/Cards';
import animals from './Animals.js';
import React from "react";
import Box from './Box';


const App = () => {
  return (
    <div className="App">

      {animals.map((animal) => (
        <Cards 
          key={animal.name}
          name={animal.name} 
          likes={animal.likes}
          Buttons={animal.Buttons}/>
          ))}
    </div>
  );
}

export default App;
