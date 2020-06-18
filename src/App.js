import React from 'react'
import CurrencySelector from './Components/CurrencySelector';
import DataDisplay from './Components/DataDisplay'

const App = () => {
  return (
    <div >
          <h1> BitCoin Index</h1>
          <CurrencySelector /> 
          <DataDisplay />
    </div>
  )
}

export default App
