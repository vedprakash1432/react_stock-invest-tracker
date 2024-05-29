import React from 'react'
import '../../UI/StockForm.css'
// import '../../UI/StockFormSir.css'
export default function StackForm() {
    return (
        // creating form with css 
        <div className='main'>
            <center>
                <h2 className='heading'>Create New Stock</h2>
            <table >
                <tr>
                    <td><input type="text" className='titletxt' placeholder='Title' required/></td>
                    <td><input type="date" className='datetxt' /></td>
                </tr>
                <tr>
                    <td><input type="number" className='pricetxt' placeholder='Price' required/></td>
                    <td></td>
                    <td><input type="submit" className='click' value='click'/></td>
                </tr>
            </table>
            </center>

            {/*  creating form  */}
            
            {/* <div>
                <label htmlFor="">title</label>
                <input type="text" className='title'/>
            </div>
            <div>
                <label htmlFor="">Price</label>
                <input type="text" className='title'/>
            </div>
            <div>
                <label htmlFor="">title</label>
                <input type="text" className='title'/>
            </div> */}
        </div>        
    )
}

// !  creating form with  bootstrap 

// <div className='container my-3 border border-rounded bg-dark p-3 border border-rounded'>
//            <h1 className='text-center text-light mb-3'>Create New Stock</h1>
//             <form className=''>
//                 <div className="form-row">
//                     <div className="form-group col-md-6">
                       
//                         <input type="email" className="form-control" placeholder="Title"/>
//                     </div>
//                     <div className="form-group col-md-6">
                       
//                         <input type="number" className="form-control" placeholder="Price"/>
//                     </div>
//                 </div>
//                 <div className="form-row">
//                     <div className="form-group col-md-6">
//                         <input type="date" className="form-control"/>
//                     </div>
//                     <div className="form-group col-md-6">
//                         <button type="submit" className="btn btn-primary">Create</button>
//                     </div>
//                 </div>
//             </form>
//         </div>