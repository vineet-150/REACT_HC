import { useState } from 'react'
import { InputBox } from './components'

import useCurrecyInfo from './hooks/useCurrenyInfo'

function App() {

  const [amount,setAmount]=useState(0)
  const [from,setFrom]=useState("usd")
  const [to,setTo]=useState("inr")
  const[convertedAmount,setConvertedAmount]=useState(0)

  const currencyInfo=useCurrecyInfo(from)

 const options = currencyInfo ? Object.keys(currencyInfo) : []

const swap = () => {
  const tempFrom = from
  const tempTo = to

  setFrom(tempTo)
  setTo(tempFrom)

  setAmount(convertedAmount)
  setConvertedAmount(amount)
}

 const convert = () => {
  if (currencyInfo && currencyInfo[to]) {
    setConvertedAmount(amount * currencyInfo[to])
  }
}//currencyInfo API se data aaya ya nahi check kar raha

   



  return (
     
    <div
        className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
        style={{
            backgroundImage: `url('https://i.pinimg.com/1200x/72/2b/e3/722be3123d573e6cba06f532835abdf3.jpg')`,
        }}
    >
        <div className="w-full">
            <div className="w-full max-w-md mx-auto border border-amber-300 rounded-lg p-6 backdrop-blur-sm bg-white/30">
                <form
                    onSubmit={(e) => {
                        e.preventDefault();// page reload hona sa rokh deta hai
                        convert()
                       
                    }}
                >
                    <div className="w-full mb-1">
                        <InputBox
                            
                            label="From"
                            amount={amount}
                            currencyOptions={options}
                            onCurrencyChange={(currency) => setFrom(currency)}
                            selectCurrency={from}
                            onAmountChange={(amount) => setAmount(amount)}
                        />
                    </div>
                    <div className="relative w-full h-0.5">
                        <button
                            type="button"
                            className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5 hover:bg-blue-700active:scale-95 transition-all"
                            onClick={swap}
                        >
                            swap
                        </button>
                    </div>
                    <div className="w-full mt-1 mb-4">
                        <InputBox
                            label="To"
                            amount={convertedAmount}
                            currencyOptions={options}
                            onCurrencyChange={(currency) => setTo(currency)}
                            selectCurrency={to}
                            amountDisable
                        />
                    </div>
                    <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
                        Convert {from.toUpperCase()} to {to.toUpperCase()}
                    </button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default App
