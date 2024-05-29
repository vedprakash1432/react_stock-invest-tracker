import React, { useState } from 'react'
// import StackForm from './StackForm'
import '../../UI/NewStock.css'
import StockForm from './StockForm'

const Newstock = (props) => {
  const saveStockDataHandler = (enteredStockData) => {
    const stockData = {
      ...enteredStockData,
      id: Math.random().toString()
    };
    props.onAddStock(stockData);
  };
  const  [isEditing,setIsEditing] =useState(false);
  const stopEditingHandler = () => {
    setIsEditing(false);
  }

  const startEditingHandler =()=>{
    setIsEditing(true);
  }

  return (
    <div>
      {!isEditing && (
      <div className='new-stock'>
        <button type='submit' className='' onClick={startEditingHandler}  >Create New Stock</button>
      </div>
      )}
      {isEditing&&(
      <div className='new-stock'>
        <StockForm onSaveStockData={saveStockDataHandler} onCancel={stopEditingHandler} />
      </div>
      )}
    </div>
  );
};
export default Newstock;
 // ! ved new stock code is given bellow

  // export default function NewStock() {
  //   return (
  //     <div className='new-stock'>
  //       {/* <StockForm/> */}
  //       < StockForm/>
  //     </div>
  //   )
  // }