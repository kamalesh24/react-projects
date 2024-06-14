import { useState } from 'react'
import { InputBox } from './components/index'
import './App.css'

function App() {
  const [amount, setAmount] = useState(0)
  const [from, setFrom] = useState('usd')
  const [to, setTo] = useState('inr')
  const [resultAmt, setResultAmt] = useState(0)

  return (
    <div>
      <InputBox />
    </div>
  )
}

export default App
