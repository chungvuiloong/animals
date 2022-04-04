import './App.css';
import Cards from './Components/Cards';
import animals from './Animals.js';
import React from "react";

// src={`https://source.unsplash.com/1600x900/?${props.title}`}

const App = () => {
  return (
    <div className="App">

      {animals.map((animal) => (
        <Cards 
          key={animal.name}
          images={animal.images} 
          name={animal.name} 
          likes={animal.likes}
          Buttons={animal.Buttons}/>

          ))}
    </div>
  );
}

export default App;
