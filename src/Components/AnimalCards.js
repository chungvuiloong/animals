import Buttons from './Buttons';
import classes from './AnimalCards.module.css';
import animals from './animals.js'

const AnimalCards = (prop) => {
    return (
        <div className={classes.container}>
            {animals.map((animal)=> {

                console.log(animal);
            })}


            Testing Animal cards
            <div>{this.prop.name}</div>
            <div>{this.prop.likes}</div>
            <Buttons></Buttons>
        </div>


)
};

export default AnimalCards;