import React, { useState, useContext } from 'react'
import UserContext from '../context/UserContext'

function Login() {
    const [uname, setUname] = useState('')
    const [password, setPassword] = useState('')

    const {setUser} = useContext(UserContext)

    const handleSubmit = (e) =>{
      e.preventDefault()
      setUser({uname, password})
    }

  return (
    <div>
      <h2>Login</h2>
      <input 
        type='text'
        value={uname}
        placeholder='Username'
        onChange={(e) => setUname(e.target.value)}
      /> <br/>
      <input 
        type='password'
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder='Password'
      /><br/>
      <button onClick={handleSubmit}>Login</button>
    </div>
  )
}

export default Login
