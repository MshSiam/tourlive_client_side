import React from "react"
import { Container, Nav, Navbar } from "react-bootstrap"
import { NavLink } from "react-router-dom"
import useAuth from "../../hooks/useAuth"
import css from "./header.css"
import ReactDOM from "react-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSignInAlt, faSignOutAlt } from "@fortawesome/free-solid-svg-icons"

const signIn = <FontAwesomeIcon icon={faSignInAlt} />
const sigOut = <FontAwesomeIcon icon={faSignOutAlt} />

const Header = () => {
  const { user, logOut } = useAuth()
  return (
    <div>
      <div className="">
        <Navbar className="nvbg" collapseOnSelect expand="lg" sticky="top">
          <Container fluid>
            <Navbar.Brand>
              <NavLink to="/home" className="nav-link color-dark fw-bold">
                TourLive
              </NavLink>
            </Navbar.Brand>
            <Navbar.Toggle className="toggle" aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav className="ms-auto my-2 my-lg-0 fw-bold" navbarScroll>
                <Nav.Link>
                  <NavLink to="/home" className="nav-link">
                    <button className="menuBtn">Home</button>
                  </NavLink>
                </Nav.Link>

                <Nav.Link>
                  <NavLink to="/spots" className="nav-link">
                    <button className="menuBtn">Spots</button>
                  </NavLink>
                </Nav.Link>

                <Nav.Link>
                  <NavLink to="/about" className="nav-link">
                    <button className="menuBtn">About Us</button>
                  </NavLink>
                </Nav.Link>

                <Nav.Link>
                  <NavLink to="/contact" className="nav-link">
                    <button className="menuBtn">Contact Us</button>
                  </NavLink>
                </Nav.Link>

                {user?.email ? (
                  <Navbar className="another-menu">
                    <Nav.Link>
                      <NavLink to="/addspot" className="nav-link">
                        <button className="menuBtn">Add Spot</button>
                      </NavLink>
                    </Nav.Link>
                    <NavLink to="/manageBookings" className="nav-link">
                      <button className="menuBtn">Manage Orders</button>
                    </NavLink>
                    <NavLink to="/myBookings" className="nav-link">
                      <button className="menuBtn">My Bookings</button>
                    </NavLink>
                    <NavLink to="/">
                      <button onClick={logOut} className="btn-danger rounded-3">
                        {sigOut}
                      </button>
                    </NavLink>
                    <Navbar.Text className="text-dark">
                      Sign in as :{" "}
                      <small className="text-dark ml-2">
                        {user?.displayName}
                      </small>
                    </Navbar.Text>
                  </Navbar>
                ) : (
                  <Navbar className="loginSingup">
                    <Nav.Link>
                      <NavLink to="/login" className="nav-link">
                        <button className="btn-danger2 loginbtn rounded-3">
                          {" "}
                          {signIn} Login
                        </button>
                      </NavLink>
                    </Nav.Link>
                    <Nav.Link>
                      <NavLink to="/signup" className="nav-link">
                        <button className="btn-danger rounded-3 signupbtn">
                          {" "}
                          Signup
                        </button>
                      </NavLink>
                    </Nav.Link>
                  </Navbar>
                )}
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    </div>
  )
}

export default Header
