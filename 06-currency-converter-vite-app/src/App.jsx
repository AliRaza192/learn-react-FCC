import { useState } from "react"
import useCurrencyInfo from "./hooks/useCurrencyInfo"
import {InputBox} from "./components/index.js"

function App() {

  const [amount, SetAmount] = useState(0)
  const [from, setFrom] = useState("USD")
  const [to, setTo] = useState("PKR")
  const [convertedAmount, setConvertedAmount] = useState(0)

  const currencyInfo = useCurrencyInfo(from)
  const options = Object.keys(currencyInfo)

  const swap = () => {
    setFrom(to)
    setTo(from)
    setConvertedAmount(amount)
    SetAmount(convertedAmount)
  }

  const convert = () => {
    setConvertedAmount(amount * currencyInfo[to])
  }

  return (
   <div className="w-full h-screen flex flex-wrap justify-center items-center
   bg-cover bg-no-repeat"
   style={{backgroundColor: 'rgb(46, 47, 123)'}}
  >
    
    <div className="w-full">
      <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg 
      p-5 backdrop-blur-sm bg-white/30">
        <form onSubmit={(e) => {
          e.preventDefault()
          convert()
        }}>
          <div className="w-full mb-1">
            <InputBox
            label="From"
            amount={amount}
            currencyOptions={options}
            onCurrencyChange={(currency) => setFrom(currency)}
            onAmountChange={(amount) => SetAmount(amount)}
            selectedCurrency={from}
            />
          </div>
          <div className="relative w-full h-0.5">
            <button
              className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2
              border-2 rounded-md border-white bg-blue-950 text-white px-2 py-0.5"
              onClick={swap}
            >
              SWAP
            </button>
          </div>
          <div className="w-full mb-1">
            <InputBox
            label="To"
            currencyOptions={options}
            amount={convertedAmount}
            onCurrencyChange={(currency) => setTo(currency)}
            selectedCurrency={to}
            amountDisabled
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-950 text-white px-4 py-3
            rounded-lg">
              Convert {from} to {to}
          </button>
        </form>
      </div>
      </div>



   </div>
  )
}

export default App
