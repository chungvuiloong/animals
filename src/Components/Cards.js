import Buttons from './Button';
import classes from './Cards.module.css';
import React from "react";

const Cards = (props) => {
    return (
        <div className={classes.container}>
            <button className="remove" onClick={props.remove}>X</button>
            <img className="imageContainer" alt={props.name} src={`https://source.unsplash.com/1280x720/?${props.name}`}></img>
            <div>{props.name}</div>

            <div className="likes_container">
                <p className="likes">❤ {props.like}</p>
                <button onClick={props.add}> Add like </button>
            </div>
        </div>
    );
};

export default Cards;