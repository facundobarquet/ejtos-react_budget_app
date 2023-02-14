import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const CurrencyDropdown = () => {
    const { dispatch, currency } = useContext(AppContext);
    return (
        <div className='alert alert-secondary'>
            <div className="col">
                <span style={{ "color": "white", "backgroundColor": "lightgreen"}}>Currency ({currency}) </span>
                <select className="custom-select col-1" id="currency"
                    style={{ "color": "white", "backgroundColor": "lightgreen", "border":"none" }}
                    onChange={(event) => dispatch({
                        type: 'CHG_CURRENCY',
                        payload: event.target.value
                    }
                    )}>
                    <option value="$">$ Dollar</option>
                    <option defaultValue selected value="£">£ Pound</option>
                    <option value="€">€ Euro</option>
                    <option value="₹">₹ Ruppee</option>
                </select>
            </div>
        </div>
    )
};
export default CurrencyDropdown;