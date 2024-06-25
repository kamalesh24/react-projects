import React, { useState } from 'react'

function Login() {
    const [uname, setUname] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = () =>{

    }

  return (
    <div>
      <h2>Login</h2>
      <input 
        type='text'
        value={uname}
        placeholder='Username'
        onChange={(e) => setUname(e.target.value)}
      />
      <input 
        type='password'
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder='Password'
      />
      <button onClick={handleSubmit}>Login</button>
    </div>
  )
}

export default Login
