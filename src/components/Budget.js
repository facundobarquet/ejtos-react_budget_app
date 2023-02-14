import React, { useContext} from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { budget, currency, expenses, dispatch } = useContext(AppContext);

    return (
        <div className='alert alert-secondary'>
            <span>Budget: {currency}
                <input
                 type="number"
                 step="10"
                 value={budget}
                 max="20000"
                 min={expenses}
                 style={{ marginLeft: '5px' , width: "100px"}}
                 onChange={(event) => dispatch({
                    type: 'SET_BUDGET',
                    payload: event.target.value
                 })}
                ></input></span>
        </div>
    );
};
export default Budget;