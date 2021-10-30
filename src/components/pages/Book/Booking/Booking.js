import React from "react"
import { useParams } from "react-router"

const Booking = () => {
  const { bookingId } = useParams()
  return (
    <div>
      <h1>This is Booking : {bookingId}</h1>
    </div>
  )
}

export default Booking
