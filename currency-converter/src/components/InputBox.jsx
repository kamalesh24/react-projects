import React, { useId } from 'react'

function InputBox({
    label,
    amount,
    onAmountChange,
    onCurrencyChange,
    currencyOptions = [],
    selectedCurrency = "usd",
    amountDisabled = false,
    className = ""
}) {
    const id = useId();
    
  return (
    <div className={`bg-white p-3 rounded-lg flex text-sm ${className}`}>
      <div className='w-1/2'>
        <lable htmlFor={id} className='text-black/40 mb-2 inline-block'>{label}</lable>
        <input
            id={id}
            type='number'
            className='outline-none w-full bg-transparent py-1.5'
            placeholder='Amount'
            disabled={amountDisabled}
            value={amount}
            onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))}
        />
      </div>
      <div className='w-1/2 flex flex-wrap justify-end text-right'>
        <p className='text-black/40 mb-2 w-full'>Currency Type</p>
        <select 
            className='bg-white rounded-lg px-1 py-1 cursor-pointer outline-none'
            value={selectedCurrency}
            onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
        >
            {currencyOptions.map((curr) => (
                <option key={curr} value={curr}>{curr}</option>
            ))}
        </select>
      </div>
    </div>
  )
}

export default InputBox
