import { useState } from 'react'

import './App.css'
import InputBoxes from './components/InputBoxes'
import useCurrencyInfo from './hooks/useCurrencyInfo'

function App() {
  
  const[from, setFrom] = useState("usd")
  const[to, setTo] = useState("inr")
  const[amount, setAmount] = useState(0);
  const[convertedAmount, setConvertedAmount] = useState(0);

  const currenciesInfo = useCurrencyInfo(from);
  const options = Object.keys(currenciesInfo)


  function Convert() {
    setConvertedAmount(amount * currenciesInfo[to]);
  }

  function swap() {
    setFrom(to);
    setTo(from);
    setAmount(convertedAmount);
    setConvertedAmount(amount);
  }

  return (
    <div className='w-screen h-screen flex items-center justify-center bg-blue-500'>

      <div className='bg-white/20 backdrop-blur-md p-6 rounded-xl shadow-lg w-full max-w-2xl'> 
          <div className="flex flex-col">
            
           <div className="mb-6">
             <InputBoxes 
                label={"From"}
                currency={from}
                setCurrency={setFrom}
                currencyOptions={options}
                amount={amount}
                onAmountChange = {(amount) => setAmount(amount) }
            />
           </div>
            
            <div className="absolute  top-2/5 left-1/2  transform -translate-y-1/2 -translate-x-1/2">
                <button className="px-6 py-1 bg-blue-500 text-white rounded shadow hover:bg-blue-600 cursor-pointer"
                  onClick={swap}
                >
                swap
                </button>
            </div>

            <div>
                <InputBoxes 
                    label={"to"}
                    currency={to}
                    setCurrency={setTo}
                    currencyOptions={options}
                    amount={convertedAmount}
                    onAmountChange={(amount) => setConvertedAmount(amount)}
                />
            </div>


            <div className='flex justify-center mt-6 '>
              <button 
              className='bg-blue-300 p-2 rounded-xl cursor-pointer hover:bg-blue-500 w-2/3'
              onClick={Convert}
              >
                  Convert {from.toUpperCase()} to {to.toUpperCase()}
              </button>
            </div>
        </div>
      </div>

    </div>
  )
}

export default App
