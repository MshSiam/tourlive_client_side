import React from "react"
import { useEffect } from "react"
import { useState } from "react"
import Spot from "./Spot/Spot"

const SpotPage = () => {
  // --fetchinf Data-- //
  const [spots, setSpots] = useState([])
  useEffect(() => {
    fetch("tour.json")
      .then((res) => res.json())
      .then((data) => setSpots(data))
  }, [])
  return (
    <div>
      <h2 className="my-4 text-warning fw-bolder "> Top Tourist Spot</h2>
      {/* <hr className="service-hr" /> */}
      <div className="container-fluid">
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
