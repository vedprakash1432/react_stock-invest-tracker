import React from 'react';
import './App.css';
import stocksArray from './components/StockArray';
import Stocks from './components/Stocks';
import NewStock from './components/NewStock/NewStock';
import { useState } from 'react';
// import {BrowserRouter as Router,Route, Switch} from 'react-router-dom';
import StockForm from './components/NewStock/StockForm';

const App = () => {
	// stock array ….StockData[]
	const [currStockData, setStock] = useState(stocksArray);

	const addStockHandler = stock => {
		setStock((prevStockData) => {
			// return [stock, ...prevStockData];
			prevStockData.push(stock);
			console.log(prevStockData);
		});
	};
	return (
		<div>
			{/* <Router>
			    <Switch>
				 <Route exact path='/stockform' component={StockForm}/>
			   </Switch>
			</Router> */}
			<NewStock onAddStock={addStockHandler} />
			<Stocks items={stocksArray} />
		</div>
	);
}
export default App;

// function App() {
// 	return React.createElement(
// 		'div',
// 		null,
// 		React.createElement(Stocks, {
// 			items: stocksArray,
// 		},)
// 	);
// }
// React.createElement(Stocks, { item: stocksArray });

// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// 	{/* {stocksArray.map((data) => (
// 		<Stocks items={data} />
// 	))} */}
// !!!!!!!!!!!!!!!!!!!!!!!!!!!
// {/* !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! */}
// {/* <StockItem userData={data} /> */}

// {/* {data.map((userData) => (
// 	<StockItem userData={userData} />
// ))} */}
// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// <StockItem title={stocks[0].title} amount={stocks[0].amount} date={stocks[0].date} />
// 			<StockItem title={stocks[1].title} amount={stocks[1].amount} date={stocks[1].date} />
// 			<StockItem title={stocks[2].title} amount={stocks[2].amount} date={stocks[2].date} />
// 			<StockItem title={stocks[3].title} amount={stocks[3].amount} date={stocks[3].date} />
