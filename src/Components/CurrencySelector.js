import React from 'react';
import supportedCurrencies from '../supported-currencies.json';

const CurrencySelector = (props) => {
    const {currency, onCurrencyChange} = props;
    return (
        <div> 
            <select value={currency} onChange={(event) => onCurrencyChange(event.target.value)}>
            {supportedCurrencies.map ((item, index) => {
                return <option value={item.currency} key={index}>{item.country}</option>
            })}
            </select>
        </div>
    )
}

export default CurrencySelector;