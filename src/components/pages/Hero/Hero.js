import React from "react"
import css from "./hero.css"

const Hero = () => {
  return (
    <div className="bg-img px-4">
      <div className="overlay">
        <h1 className="text-light">
          Make Your First Trip and get{" "}
          <span className="fw-bold text-warning">25%</span> off
        </h1>
        <div className="search">
          <button className="btn1">Book Now</button>
        </div>
      </div>
    </div>
  )
}

export default Hero
