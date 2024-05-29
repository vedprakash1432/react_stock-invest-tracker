import React, { useState } from 'react';
import Card from './Card';
import StockItem from './StockItem';
import '../UI/Stocks.css';
import StocktFilter from './StockFilter'

function Stocks(props) {
	const [filterYear,setFileteredYear] = useState('2020');
	
	const filterChangeHandler =(selectedYear) => {
		setFileteredYear(selectedYear);
	}

	const filterStocks = props.items.filter(stock => {
		return stock.date.getFullYear().toString() === filterYear;

	});

	return (
		<div>
			
			<Card className="stocks">
				<StocktFilter selected={filterYear}  onChangeFilter = {filterChangeHandler}/>
				<h2 className="title">Stock Investment Tracker</h2>
				
				{props.items.map((data)=>(
					<StockItem  title={data.title} amount={data.amount} date={data.date}/>
				))}
				{/* <StockItem
					title={props.items[0].title}
					amount={props.items[0].amount}
					date={props.items[0].date}
				/>
				<StockItem
					title={props.items[1].title}
					amount={props.items[1].amount}
					date={props.items[1].date}
				/>
				<StockItem
					title={props.items[2].title}
					amount={props.items[2].amount}
					date={props.items[2].date}
				/>
				<StockItem
					title={props.items[3].title}
					amount={props.items[3].amount}
					date={props.items[3].date}
				/> */}
			</Card>
		</div>
	);
}
export default Stocks;


// ! DON'T SETTLED DOWN
// const Stocks = (props) => {
// 	return React.createElement(
// 		'div',
// 		null,
// 		React.createElement(
// 			Card,
// 			{
// 				className: 'stocks',
// 			},
// 			React.createElement(
// 				'h2',
// 				{
// 					className: 'title',
// 				},
// 				'Stock Investment Tracker'
// 			),
// 			React.createElement(StockItem, {
// 				title: props.items[0].title,
// 				amount: props.items[0].amount,
// 				date: props.items[0].date,
// 			}),
// 			React.createElement(StockItem, {
// 				title: props.items[1].title,
// 				amount: props.items[1].amount,
// 				date: props.items[1].date,
// 			}),
// 			React.createElement(StockItem, {
// 				title: props.items[2].title,
// 				amount: props.items[2].amount,
// 				date: props.items[2].date,
// 			}),
// 			React.createElement(StockItem, {
// 				title: props.items[3].title,
// 				amount: props.items[3].amount,
// 				date: props.items[3].date,
// 			})
// 		)
// 	);
// };

// export default Stocks;
// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
