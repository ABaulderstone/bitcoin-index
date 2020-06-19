import React, {useState} from 'react'
import CurrencySelector from './Components/CurrencySelector';
import DataDisplay from './Components/DataDisplay'

const App = () => {
  const defaultCurrency = 'AUD'
  
  const [currency, setCurrency]= useState(defaultCurrency);
  const handleCurrencyChange = (newCurrency) => {
    setCurrency(newCurrency);
  }
  return (
    <div >
          <h1> BitCoin Index</h1>
          <CurrencySelector currency={currency} onCurrencyChange={handleCurrencyChange} /> 
          <DataDisplay />
    </div>
  )
}

export default App
