import Buttons from './Button';
import classes from './Cards.module.css';
import React from "react";


const Cards = (props) => {
    return (
        <div className={classes.container}>
            <div>{props.name}</div>
            <div>{props.likes}Likes</div>
            <Buttons></Buttons>
        </div>
    );
};

export default Cards;