import React from 'react';
import classes from "./Card.module.css";

const Card = (props) => {
	// eslint-disable-next-line react/prop-types
return <div className={classes.card}>{props.children}</div>;
};

export default Card;
