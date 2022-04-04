import Buttons from './Button';
import classes from './Cards.module.css';
import React from "react";

const Cards = (props) => {
    return (
        <div className={classes.container}>
            <img className="imageContainer" src={`https://source.unsplash.com/1600x900/?${props.name}`}></img>
            <div>{props.name}</div>
            <div>{props.likes}Likes</div>
            <Buttons></Buttons>
        </div>
    );
};

export default Cards;