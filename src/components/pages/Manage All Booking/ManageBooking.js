import React, { useEffect, useState } from "react"
import AllBookings from "./Bookings/AllBookings"

const ManageBooking = () => {
  const [bookings, setBookings] = useState([])
  useEffect(() => {
    fetch("http://localhost:5000/booking")
      .then((res) => res.json())
      .then((data) => setBookings(data))
  }, [])
  return (
    <div>
      <h1>This is all bookings</h1>
      {bookings.map((booking) => (
        <AllBookings spot={booking} key={booking._id}></AllBookings>
      ))}
    </div>
  )
}

export default ManageBooking
