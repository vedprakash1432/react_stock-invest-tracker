import React from 'react';
// import './StockForm.css';
import '../../UI/StockForm.css'
import { useState } from 'react';

const StockForm = (props) => {
    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('');

    const titleChangeHandler = (event) => {
      setEnteredTitle(event.target.value);
    };

    const amountChangeHandler = (event) => {
        setEnteredAmount(event.target.value);
    };
    
    const dateChangeHandler = (event) => {
       setEnteredDate(event.target.value);
    };
    
    const submitHandler = (event) => {
        event.preventDefault();

        const stockData = {
        title:enteredTitle,
        amount:enteredAmount,
        date: new Date(enteredDate)
     };

     console.log(stockData);
     props.onSaveStockData(stockData);
     setEnteredTitle('');
     setEnteredAmount('');
     setEnteredDate('');
     
    }

    return (
            <form onSubmit={submitHandler} >
				<h2 className="mb-3">Add New Stock</h2>
                <hr/>
                <div className='new-stock__controls'>
                    <div className='new-stock__control'>
                        <label>Title</label>
                        <input type='text'
                            onChange={titleChangeHandler} />
                    </div>
                    <div className='new-stock__control'>
                        <label>Amount</label>
                        <input type='number' min='0.01' step='0.01' onChange={amountChangeHandler} />
                    </div>
                    <div className='new-stock__control'>
                        <label>Date</label>
                        <input type='date' min='2019-01-01' max='2022-12-31' onChange={dateChangeHandler} />
                    </div>
                </div>
                <div className='new-stock__actions'>
                <button type='submit' className='bg-danger' onClick={props.onCancel} >Cancel</button>
                    <button type='submit'>Add Stock</button>
                </div>
            </form>

    );
};
export default StockForm;

// !  lecture 09 code is given bellow

// const [enteredTitle, setEnteredTitle] = useState('');
// const [enteredAmount, setEnteredAmount] = useState('');
// const [enteredDate, setEnteredDate] = useState('');

// const titleChangeHandler = (event) => {
//   setEnteredTitle(event.target.value);
// };

// const amountChangeHandler = (event) => {
//     setEnteredAmount(event.target.value);
// };

// const dateChangeHandler = (event) => {
//    setEnteredDate(event.target.value);
// };


// const submitHandler = (event) => {
//     event.preventDefault();

//     const stockData = {
//     title:enteredTitle,
//     amount:enteredAmount,
//     date:new Date(enteredDate)
//  };
//  console.log(stockData);
// }

// return (
//     <form onSubmit={submitHandler}>
//         <div className='new-stock__controls'>
//             <div className='new-stock__control'>
//                 <label>Title</label>
//                 <input type='text'
//                     onChange={titleChangeHandler} />
//             </div>
//             <div className='new-stock__control'>
//                 <label>Amount</label>
//                 <input type='number' min='0.01' step='0.01' onChange={amountChangeHandler} />
//             </div>
//             <div className='new-stock__control'>
//                 <label>Date</label>
//                 <input type='date' min='2019-01-01' max='2022-12-31 onChange={dateChangeHandler}' />
//             </div>
//         </div>
//         <div className='new-stock__actions'>
//             <button type='submit' >Add stock</button>
//         </div>
//     </form>

// );


// !  lecture 09 code is given bellow

// const StockForm = () => {
//     const [enteredTitle, setEnteredTitle] = useState('');
//     const [enteredAmount, setEnteredAmount] = useState('');
//     const [enteredDate, setEnteredDate] = useState('');
//     const[userInput,setUserInput] = useState({
//         enteredTitle:'',
//         enteredAmount:'',
//         enteredDate:'',
//     });

//     const titleChangeHandler = (event) => {
//       setUserInput((prevState)=>{
//          console.log(prevState);
//           return {...prevState,enteredTitle:event.target.value};
//       });
//     };
//     const amountChangeHandler = (event) => {
//       setUserInput((prevState)=>{
//         console.log(prevState);

//           return {...prevState,enteredAmount:event.target.value}

//       });

//     };
//     const dateChangeHandler = (event) => {
//         setUserInput((prevState)=>{
//             console.log(prevState);
//           return {...prevState,enteredDate:event.target.value};
          
//       });
//     };

// !! lectur 08 code is given bellow

// const [enteredTitle, setEnteredTitle] = useState('');
// const [enteredAmount, setEnteredAmount] = useState('');
// const [enteredDate, setEnteredDate] = useState('');
// const[userInput,setUserInput] = useState({
//     enteredTitle:'',
//     enteredAmount:'',
//     enteredDate:'',
// });

// const titleChangeHandler = (event) => {
//     setUserInput({
//         ...userInput,
//         enteredTitle:event.target.value            
//     });
// };
// const amountChangeHandler = (event) => {
//     setUserInput({
//         ...userInput,
//         enteredAmount:event.target.value
//     });

// };
// const dateChangeHandler = (event) => {
//     setUserInput({
//         ...userInput,
//         enteredDate:event.target.value
//     })
// };


//  ! lecture  07 code is givent bellow



// const StockForm = () => {
//     const [enteredTitle, setEnteredTitle] = useState('');
//     const [enteredAmount, setEnteredAmount] = useState('');
//     const [enteredDate, setEnteredDate] = useState('');

//     const titleChangeHandler = (event) => {
//         setEnteredTitle(event.target.value);
//         // console.log(event.target.value);
//     };
//     const amountChangeHandler = (event) => {
//         setEnteredAmount(event.target.value);
//         // console.log(event.target.value);
//     };
//     const dateChangeHandler = (event) => {
//         setEnteredDate(event.target.value);
//         // console.log(event.target.value);
//     };

//     return (
//         <div>
//             <form>
//                 <div className='new-stock__controls'>
//                     <div className='new-stock__control'>
//                         <label>Title</label>
//                         <input type='text'
//                             onChange={titleChangeHandler} />
//                     </div>
//                     <div className='new-stock__control'>
//                         <label>Amount</label>
//                         <input type='number' min='0.01' step='0.01' onChange={amountChangeHandler} />
//                     </div>
//                     <div className='new-stock__control'>
//                         <label>Date</label>
//                         <input type='date' min='2019-01-01' max='2022-12-31 onChange={dateChangeHandler}' />
//                     </div>
//                 </div>
//                 <div className='new-stock__actions'>
//                     <button type='submit'>Add stock</button>
//                 </div>
//             </form>
//         </div>

//     );
// };
// export default StockForm;