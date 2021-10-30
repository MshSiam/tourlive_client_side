import React from "react"
import css from "./footer.css"

const Footer = () => {
  return (
    <div>
      <div className="main-footer  mt-5 py-5">
        <div className="container   ">
          <div className="row">
            <div className="col ">
              {/* <img className="nav-img" src={logo} alt="" /> */}
              <h2 className="text-light">TourLive</h2>
              <hr className="text-danger" />
              <hr className="text-danger" />
              <ul className="text-light">
                {/* <li>{phone1} 01765871554</li>
                <li>{maps}Brahmanbaria, Bangladesh</li>
                <li>{street}123 street, South North</li> */}
              </ul>
            </div>
            <div className="col text-light">
              <h4>Tour Guide</h4>
              <hr className="text-danger" />

              <ul className="text-light">
                <li>Our Doctors</li>
                <li>Icu specialists</li>
                <li>Nurse</li>
                <li>Other Stuffs</li>
              </ul>
            </div>
            <div className="col text-light">
              <h4>Follow Us on Social</h4>
              <hr className="text-danger" />

              <div class="wrapper">
                <div class="button">
                  <div class="icon">
                    <i class="fab fa-facebook-f"></i>
                  </div>
                </div>
                <div class="button">
                  <div class="icon">
                    <i class="fab fa-twitter"></i>
                  </div>
                </div>
                <div class="button">
                  <div class="icon">
                    <i class="fab fa-instagram"></i>
                  </div>
                </div>

                <div class="button">
                  <div class="icon">
                    <i class="fab fa-youtube"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <hr className="text-danger fw-bold" />
          <div className="row">
            <p className="text-danger">&copy; Reserved by Muhammad Siam</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
