import React, { useState } from 'react';
import Card from './Card';
import InvestmentDate from './InvestmentDate';
import '../UI/StockItem.css';

const StockItem = (props) => {
    // const {stocks} = useState(props);
    //   console.log(stocks.id);
	// show =() =>{
	// 	console.log('button is clicked');
	// }

	return React.createElement(
		Card,
		{ className: 'stock-item' },
		React.createElement(
			'div',
			{className:'row'},
			React.createElement(
				'div',
				{className:'ml-3'},
			    React.createElement(InvestmentDate, { date: props.date}),
			),
		React.createElement(
			'div',
			{ className:'stock-item__description' },
			React.createElement('h2',{className:'text-dark'}, props.title),
			React.createElement('div', { className: 'stock-item__price' }, '$', props.amount),
			React.createElement('button',{className: 'stock-item__delete mr-3', onClick:'show'},'Delete'),
		),
		)
	);
};
export default StockItem;

// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// function StockItem(props) {
// 	return (
// 		<Card className="stock-item">
// 			<div className='row'>
// 				<div className='ml-3'>
// 					<InvestmentDate date={props.date} />
// 				</div>
// 				<div className="stock-item__description">
// 					<h2 className='text-dark'>{props.title}</h2>
// 					<div className="stock-item__price mr-3">${props.amount}</div>
// 				</div>
// 			</div>
// 		</Card>
// 	);
// }
// export default StockItem;
// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

// function StockItem(props) {
// 	return (
// 		<div>
// 			<div className="stock-item">
// 				<h3>{props.date.toISOString()}</h3>

// 				<div className="stock-item__description">
// 					<h2>{props.title}</h2>
// 					<div className="stock-item__price">${props.amount}</div>
// 				</div>
// 			</div>
// 		</div>
// 	);
// }

// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// <div className="stock-item">
// 	<h3>{props.userData[0].date}</h3>
// 	<div className="stock-item__description">
// 		<h2>{props.userData[0].stockName}</h2>
// 		<div className="stock-item__price">${props.userData[0].price}</div>
// 	</div>
// </div>
// <div className="stock-item">
// 	<h3>{props.userData[1].date}</h3>
// 	<div className="stock-item__description">
// 		<h2>{props.userData[1].stockName}</h2>
// 		<div className="stock-item__price">${props.userData[1].price}</div>
// 	</div>
// </div>
// <div className="stock-item">
// 	<h3>{props.userData[2].date}</h3>
// 	<div className="stock-item__description">
// 		<h2>{props.userData[2].stockName}</h2>
// 		<div className="stock-item__price">${props.userData[2].price}</div>
// 	</div>
// </div>
// <div className="stock-item">
// 	<h3>{props.userData[3].date}</h3>
// 	<div className="stock-item__description">
// 		<h2>{props.userData[3].stockName}</h2>
// 		<div className="stock-item__price">${props.userData[3].price}</div>
// 	</div>
// </div>
