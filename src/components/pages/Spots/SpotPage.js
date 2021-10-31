import React from "react"
import { useEffect } from "react"
import { useState } from "react"
import Spot from "./Spot/Spot"
import css from "./spotPage.css"

const SpotPage = () => {
  // --fetchinf Data-- //
  const [spots, setSpots] = useState([])
  useEffect(() => {
    fetch("https://eerie-tomb-25454.herokuapp.com/spots")
      .then((res) => res.json())
      .then((data) => setSpots(data))
  }, [])
  return (
    <div>
      <div className="sp-img px-4">
        <div className="overlay">
          <h1 className="text-success">Book Your Favourite Destination </h1>
        </div>
      </div>
      <h2 className="my-4 text-warning fw-bolder "> Book Your Trip</h2>
      <h1>Top Destination</h1>

      <div className="container">
        <div className="row g-4">
          {spots.map((spot) => (
            <Spot spot={spot} key={spot.id}></Spot>
          ))}
        </div>
      </div>
    </div>
  )
}

export default SpotPage
