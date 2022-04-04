import './App.css';
import Cards from './Components/Cards';
import animals from './Animals.js';
import React, { Component } from "react";

// src={`https://source.unsplash.com/1600x900/?${props.title}`}

class App extends Component {
  state = {
    animals: animals,
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


  render() {
    return (
      <div className="App">
        {this.state.animals.map((animal) => (
          <Cards 
            key={animal.name}
            images={animal.images} 
            name={animal.name}
            like={animal.likes}
            remove={() => this.removeHandler(animal.name)}
            // remove={this.removeHandler.bind(this, animal.name)}

            add={() => this.addLikeHandler(animal.name)}
          />
            ))}
      
      </div>
    );

  }
}

export default App;
