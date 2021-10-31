import React, { useEffect, useState } from "react"
import AllBookings from "./Bookings/AllBookings"

const ManageBooking = () => {
  const [bookings, setBookings] = useState([])
  useEffect(() => {
    fetch("https://eerie-tomb-25454.herokuapp.com/booking")
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
