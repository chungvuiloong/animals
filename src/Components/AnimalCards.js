import Buttons from './Buttons';
import classes from './AnimalCards.module.css';


const AnimalCards = (prop) => {
    return (
        <div className={classes.container}>
            Testing Animal cards
            <div>{prop.name}</div>
            <div>{prop.likes}</div>
            <Buttons></Buttons>
        </div>


)
};

export default AnimalCards;