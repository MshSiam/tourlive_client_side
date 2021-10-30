import React from "react"
import { Nav } from "react-bootstrap"
import { NavLink } from "react-router-dom"
import notfound from "../../../images/notfound.png"

const NotFound = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-6 col-md-6 col-12">
          <p>
            <span className="fw-bold mt-4">404 error.</span> We are sorry. The
            resource requested could not be found. Make Sure
          </p>
          <Nav.Link>
            <NavLink to="/home">
              <button className="btn-danger rounded-3">Go Back</button>
            </NavLink>
          </Nav.Link>
        </div>
        <div className="col-lg-6 col-md-6 col-12">
          <img src={notfound} alt="" />
        </div>
      </div>
    </div>
  )
}

export default NotFound
