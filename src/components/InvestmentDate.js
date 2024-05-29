import React from 'react';
import '../UI/InvestmentDate.css';

const InvestmentDate = (props) => {
	const month = props.date.toLocaleString('en-US', { month: 'long'});
	const day = props.date.toLocaleString('en-US', {day: '2-digit'});
	const year = props.date.getFullYear();
	
	return React.createElement(
		'div',
		{
			className: 'investment-date',
		},
		React.createElement(
			'div',
			{
				className: 'investment-date__month',
			},
			month
		),
		React.createElement(
			'div',
			{
				className: 'investment-date__year',
			},
			year
		),
		React.createElement(
			'div',
			{
				className: 'investment-date__day',
			},
			day
		)
	);
};
export default InvestmentDate;

//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

// import '../UI/InvestmentDate.css';
// function InvestmentDate(props) {
// 	const month = props.date.toLocaleString('en-US', { month: 'long' });
// 	const day = props.date.toLocaleString('en-US', { day: '2-digit' });
// 	const year = props.date.getFullYear();
// 	return (
// 		<div className="investment-date">
// 			<div className="investment-date__month">{month}</div>
// 			<div className="investment-date__year">{year}</div>
// 			<div className="investment-date__day">{day}</div>
// 		</div>
// 	);
// }
// export default InvestmentDate;
