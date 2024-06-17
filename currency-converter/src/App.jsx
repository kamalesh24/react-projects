import { useState } from 'react'
import { InputBox } from './components/index.js'
import './App.css'
import useCurrencyInfo from './hooks/useCurrencyInfo'

function App() {
  const [amount, setAmount] = useState(0)
  const [from, setFrom] = useState('usd')
  const [to, setTo] = useState('inr')
  const [resultAmt, setResultAmt] = useState(0)

  const currencyInfo = useCurrencyInfo(from)
  const options = Object.keys(currencyInfo)

  const convert = () => {
    setResultAmt(Math.round(amount * currencyInfo[to] * 100)/100)
  }

  const swap = () => {
    setTo(from)
    setFrom(to)
    setResultAmt(amount)
    setAmount(resultAmt)
  }

  return (
    <div className='w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat'
         style={{backgroundImage: `url("/currency-wallpaper.jpg")`}}>
      <div className='w-full'>
        <div className='w-full max-w-md mx-auto border border-gray-600 rounded-lg p-5 backdrop-blur-sm bg-white/60'>
          <form onSubmit={(e) => {
            e.preventDefault()
            convert()
          }}>
            <div className='w-full mb-1'>
              <InputBox 
                label="from"
                amount={amount}
                onAmountChange={(amt) => setAmount(amt)}
                onCurrencyChange={(curr) => setFrom(curr)}
                currencyOptions={options}
                selectedCurrency={from}
              />
            </div>
            <div className='relative w-full h-0.5'>
              <button 
                className='absolute left-1/2 -translate-x-1/2 -translate-y-1/2 bg-blue-500 border border-white text-white px-2 pb-0.5 rounded-lg'
                onClick={swap}
              >swap</button>
            </div>
            <div className='w-full mb-1'>
              <InputBox 
                label="to"
                amount={resultAmt}
                onAmountChange={(amt) => setResultAmt(amt)}
                onCurrencyChange={(curr) => setTo(curr)}
                currencyOptions={options}
                selectedCurrency={to}
                amountDisabled
              />
            </div>
            <button 
              type='submit'
              className='w-full bg-blue-600 border border-white text-white px-2 py-3 rounded-lg'
            >Convert {from.toUpperCase()} to {to.toUpperCase()}</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default App
