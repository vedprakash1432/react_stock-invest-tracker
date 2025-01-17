import React from "react";
import '../UI/StockFilter.css'
const StockFilter = (props) => {
    const dropdownChangeHandler = (event) => {
        props.onChangeFilter(event.target.value);
    };

    return (
        <div className="stock-filter">
            <div className="stock-filter__control">
                <label>Filter by year</label>
                <select value={props.selected} onChange={dropdownChangeHandler}>
                    <option value="2022">2022</option>
                    <option value="2021">2021</option>
                    <option value="2020">2020</option>
                    <option value="2019">2019</option>
                </select>
            </div>
        </div>
    )
}
export default StockFilter;