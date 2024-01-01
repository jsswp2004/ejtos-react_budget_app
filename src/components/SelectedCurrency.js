import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';
const SelectedCurrency = (props) => {
    // const { dispatch } = useContext(AppContext);
    const [name, setName] = useState('');
    // const [quantity, setQuantity] = useState('');
    // const [action, setAction] = useState('');

    // const submitEvent = () => {
    //     const item = {
    //         name: name,
    //         quantity: parseInt(quantity),
    //     };
    //     if (action === "Reduce") {
    //         dispatch({
    //             type: 'RED_QUANTITY',
    //             payload: item,
    //         });
    //     } else {
    //         dispatch({
    //             type: 'ADD_QUANTITY',
    //             payload: item,
    //         });
    //     }
    // };
    return (
        <div>
            <div className='row'>
                <div className="input-group mb-3" style={{ marginRight: '2rem' }}>
                    <div className="input-group-prepend">
                        <label className="input-group-text" htmlFor="inputSelectedCurrency">Currency</label>
                    </div>
                    <select className="custom-select" id="inputSelectedCurrency" onChange={(event) => setName(event.target.value)}>
                        <option defaultValue>Choose...</option>
                        <option value="Dollar" name="Dollar"> $ Dollar</option>
                        <option value="Pound" name="Pound">£ Pound</option>
                        <option value="Euro" name="Euro">€ Euro</option>
                        <option value="Ruppee" name="Ruppee">₹ Ruppee</option>

                    </select>
                </div>
            </div>
        </div>
    );
};
export default SelectedCurrency;
