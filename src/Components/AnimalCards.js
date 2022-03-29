import Buttons from './Button';
import classes from './AnimalCards.module.css';


const AnimalCards = (props) => {
    return (
        <div className={classes.container}>
            <div>{props.name}</div>
            <div>{props.likes}</div>
            <Buttons></Buttons>
        </div>


)
};

export default AnimalCards;