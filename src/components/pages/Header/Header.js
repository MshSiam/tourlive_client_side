import React from "react"
import { Container, Nav, Navbar } from "react-bootstrap"
import { NavLink } from "react-router-dom"
import css from "./header.css"

const Header = () => {
  return (
    <div>
      <>
        <Navbar bg="dark" collapseOnSelect expand="lg" sticky="top">
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
                  <NavLink to="/addspot" className="nav-link">
                    <button className="menuBtn">Add Spot</button>
                  </NavLink>
                </Nav.Link>
                <Nav.Link>
                  <NavLink to="/manageorders" className="nav-link">
                    <button className="menuBtn">Manage Orders</button>
                  </NavLink>
                </Nav.Link>

                <Nav.Link>
                  <NavLink to="/contact" className="nav-link">
                    <button className="menuBtn">Contact Us</button>
                  </NavLink>
                </Nav.Link>

                {/* {user?.email ? (
                <Nav.Link>
                  <NavLink to="/">
                    <button onClick={logOut} className="btn-warning rounded-3">
                      Logout
                    </button>
                  </NavLink>
                </Nav.Link>
              ) : (
                <Navbar className="loginSingup">
                  <Nav.Link>
                    <NavLink to="/login" className="nav-link">
                      <button className="btn-danger2 loginbtn rounded-3">
                        {" "}
                        {element1} Login
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
              )} */}
              </Nav>
              <Navbar.Text className="text-light">
                {/* Sign in as : <p className="text-light">{user?.displayName}</p> */}
              </Navbar.Text>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </>
    </div>
  )
}

export default Header
