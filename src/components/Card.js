import React from 'react';
import '../UI/Card.css';
const Card = (props) => {
	const classes = 'card ' + props.className;
	return React.createElement(
		'div',
		{
			className: classes,
		},
		props.children
	);
};
export default Card;

// function Card(props) {
// 	const classes = 'card ' + props.className;
// 	return <div className={classes}>{props.children}</div>;
// }
