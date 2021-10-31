import React from "react"
import { useEffect } from "react"
import { useState } from "react"
import Spot from "./Spot/Spot"

const Spots = () => {
  // --fetchinf Data-- //
  const [spots, setSpots] = useState([])
  useEffect(() => {
    fetch("http://localhost:5000/spots")
      .then((res) => res.json())
      .then((data) => setSpots(data))
  }, [])
  return (
    <div>
      <h2 className="my-4 text-warning fw-bolder"> Top Destination Of</h2>
      <h1>Weekend</h1>
      {/* <hr className="service-hr" /> */}
      <div className="container">
        <div className="row g-4">
          {spots.slice(0, 6).map((spot) => (
            <Spot spot={spot} key={spot._id}></Spot>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Spots
