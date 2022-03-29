import './App.css';
import AnimalCards from './Components/AnimalCards';
import {animals} from './animals.js'

const App = () => {
  return (
    <div className="App">
      {console.log(animals)}

      {animals.map((animal)=>{
        // console.log(animal);
        console.log(animal.name);
        <AnimalCards 
          key={animal.name}
          name={animal.name} 
          likes={animal.likes}/>

      })}
      
      <AnimalCards/>

    </div>
  );
}

export default App;
