import './App.css';
import Cards from './Components/Cards';
import animals from './Animals.js';
import React from "react";
import Box from './Box';


const App = () => {
  return (
    <div className="App">
      {animals.map((animal) => { 
        // console.log(animal);
        console.log(animal.name);
        <Cards 
          key={animal.name}
          name={animal.name} 
          likes={animal.likes}/>

      })}

      {animals.map((animal) => { 
        <Box 
          key={animal.name}
          name={animal.name} 
          likes={animal.likes}></Box>

      })}
      
      <Cards/>
      

    </div>
  );
}

export default App;
