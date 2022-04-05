import './App.css';
import Cards from './Components/Cards';
import animals from './Animals.js';
import React, { Component } from "react";
import PlaySound from './PlaySound.js';

// src={`https://source.unsplash.com/1600x900/?${props.title}`}

class App extends Component {
  state = {
    animals: animals,
    search: ''
  };

 
  removeHandler = (name)=> {
   const updatedArray = this.state.animals.filter((animal) => animal.name !== name);
   this.setState({
     animals: updatedArray,
   });
  };

  addLikeHandler = (name) => {
    this.setState((state) => {
      const updatedAnimalsArray = state.animals.map((animal) => {
        if (animal.name === name) {
          return { ...animal, likes: animal.likes + 1 };
        } else {
          return animal;
        }
      });
      return {
        animals: updatedAnimalsArray,
      };
    });
    console.log(this.state);
  };

  searchHandler =(e) => {
    this.setState({search: e.target.value});
  }


  render() {

    const animalFilter = this.state.animals.filter((animal)=>{
      return animal.name.toLowerCase().includes(this.state.search.toLowerCase());
    });

    return (
      <div className="App">
        <PlaySound/>
        <h1>{this.state.animals.length} animals</h1>
        {/* <h1>{animals.length} animals</h1> */}
        <input type="text" onChange={this.searchHandler}/>
        <h3>{this.state.search}</h3>
        {this.state.animals.map((animal) => (
          
          <Cards 
            search={this.state.search}
            key={animal.name}
            images={animal.images} 
            name={animal.name}
            like={animal.likes}
            remove={this.removeHandler.bind(this, animal.name)}

            add={() => this.addLikeHandler(animal.name)}
          />
            ))}
      
      </div>
    );

  }
}

export default App;
