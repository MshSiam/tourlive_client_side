import React from "react"
import { Link, useLocation } from "react-router-dom"
import { useHistory } from "react-router"
import useAuth from "../../hooks/useAuth"

const Login = () => {
  const { singInUsingGoogle } = useAuth()
  const location = useLocation()
  const history = useHistory()
  const redirectUri = location.state?.from || "/home"

  // login button handler
  const googleLoginHandle = () => {
    singInUsingGoogle().then((result) => {
      history.push(redirectUri)
    })
  }
  return (
    <div className="my-3 py-4">
      <h1 className="my-3">Please Login</h1>
      <div className="login">
        <button onClick={googleLoginHandle} className="btn-danger">
          <i className="fab fa-google text-warning fw-bold"></i>
          <span></span> Google SignIn
        </button>
        <p className="my-3">
          Don't have an account? <Link to="/signup">Register for Free</Link>
        </p>
      </div>
    </div>
  )
}

export default Login
