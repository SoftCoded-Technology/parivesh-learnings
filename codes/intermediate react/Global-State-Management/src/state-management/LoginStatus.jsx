import React, { useContext, useReducer } from 'react'
import LoginStatusReducer from './reducer/LoginStatusReducer'
import LoginContext from './context/LoginContext'

const LoginStatus = () => {

  const {name, dispatch} = useContext(LoginContext)
  return (
    <>
    <div>
        <span className='h2'>
            {name ? name : "Hello pls login"}
        </span>  
        <button onClick={()=>dispatch({type:"LOGIN"})} className='btn btn-link'>Login</button>
        <button onClick={()=>dispatch({type:"LOGOUT"})} className='btn btn-link'>Logout</button>
    </div>
    </>
  )
}

export default LoginStatus
