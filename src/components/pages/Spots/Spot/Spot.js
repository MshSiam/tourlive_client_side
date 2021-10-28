import React from "react"
import { Link } from "react-router-dom"
import css from "./spot.css"

const Spot = (props) => {
  const { name, image, id, price, day } = props.spot
  return (
    <div className="service col-lg-4 col-md-6 col-12 my-4">
      <div className="bgcolor">
        <img className="service-img" src={image} alt="" />
        <h3 className="text-info">{name}</h3>
        <p>Duration : {day} days</p>
        <h2>
          Cost : <span className="text-danger">${price}</span>
          <small>per day</small>
        </h2>
        <Link to={`/spot/${id}`}>
          <button className="btn-danger rounded-3">Learn More</button>
        </Link>
        <button className="btn1">Book Now</button>
      </div>
    </div>
  )
}

export default Spot
