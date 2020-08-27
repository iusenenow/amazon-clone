import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { auth } from './firebase'

const Login = () => {
  const history = useHistory()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const login = e => {
    e.preventDefault()

    auth.signInWithEmailAndPassword(email, password).then(auth => {
      // logged in, redirect to homepage
      history.push('/')
    }).catch(e => alert(e.message))
  }

  const register = e => {
    e.preventDefault()

    auth.createUserWithEmailAndPassword(email, password).then(auth => {
      // created a user and logged in, redirect to homepage
      history.push('/')
    }).catch(e => alert(e.message))
  }

  return (
    <div className="login">
      <Link to='/'>
        <img src="http://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png" alt="logo" className="login-logo" />
      </Link>

      <div className="login-container">
        <h1>Sign in</h1>
        <form>
          <h5>E-mail</h5>
          <input value={email} type="email" onChange={e => setEmail(e.target.value)} />
          <h5>Password</h5>
          <input value={password} type="password" onChange={e => setPassword(e.target.value)} />
          <button
            type="submit"
            onClick={login}
            className="login-signInButton">Sign In</button>
        </form>

        <p>By signing-in you agree to Amazon's Conditions of Use & Sale. Please see our Privacy Notice, our Cookies Notice and out Interest-Based Ads Notice.</p>
        <button
          onClick={register}
          className="login-registerButton">Create your Amazon Account</button>
      </div>
    </div>
  )
}

export default Login
