import React from 'react';
import './css/login.css'

const Login = () => {
  return (
    <div>
      <div className='oval-login-div'>
        <img src="/public/worker.png" className='oval-img' alt="worker image" />
      </div>
      <div>
        <h1>Login</h1>
        <p>Login to access your Admin  account</p>
      </div>
    </div>
  )
}

export default Login
