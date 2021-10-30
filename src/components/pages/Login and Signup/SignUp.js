import React from "react"
import { Link } from "react-router-dom"
import initializeAuthentication from "../../Firebase/firebase.init"
import useAuth from "../../hooks/useAuth"

initializeAuthentication()

const SignUp = () => {
  const { singInUsingGoogle } = useAuth()
  return (
    <div>
      <h5 className="text-warning my-3">New User ? </h5>
      <h2 className="my-4">Sign Up With Google</h2>
      <button onClick={singInUsingGoogle} className="btn-danger">
        <i className="fab fa-google text-warning fw-bold"></i>
        <span></span> Google SignIn
      </button>
      <p className="my-2">
        Already registered?{" "}
        <Link class to="/login">
          Login Here
        </Link>
      </p>
    </div>
  )
}

export default SignUp
