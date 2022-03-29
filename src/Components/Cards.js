import Buttons from './Button';
import classes from './AnimalCards.module.css';
import React from "react";


const Cards = (props) => {
    return (
        <div className={classes.container}>
            <div>{props.name}Name</div>
            <div>{props.likes}Likes</div>
            <Buttons></Buttons>
        </div>
    );
};

export default Cards;