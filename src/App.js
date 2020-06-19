import React, {useState, useEffect} from 'react'
import CurrencySelector from './Components/CurrencySelector';
import DataDisplay from './Components/DataDisplay'

const App = () => {
  const defaultCurrency = 'AUD'
  
  const [currency, setCurrency]= useState(defaultCurrency);
  const [bitCoinData, setBitCoinData] = useState({});
  const bitcoinAPI = 'https://api.coindesk.com/v1/bpi/historical/close.json'
  
  useEffect(() => {
    console.log("In use effect");
    function getData() {
      fetch(`${bitcoinAPI}?currency=${currency}`)
      .then(response => response.json())
      .then( data => setBitCoinData(data.bpi))
      .catch(error => console.error(error))
    }
    getData()
    return () => {console.log("On unmount")};
  }, [currency])
  
  const handleCurrencyChange = (newCurrency) => {
    setCurrency(newCurrency);
  }
  return (
    <div >
          <h1> BitCoin Index</h1>
          <CurrencySelector currency={currency} onCurrencyChange={handleCurrencyChange} /> 
          <h2>Data for {currency} </h2>
          <DataDisplay data={bitCoinData} />
    </div>
  )
}

export default App
