import axios from "axios"
import React, { useEffect, useState } from "react"
import { useForm } from "react-hook-form"
import { useParams } from "react-router"
import useAuth from "../../../hooks/useAuth"
import css from "./booking.css"

const Booking = () => {
  const { user } = useAuth()
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors }
  } = useForm()
  const onSubmit = (data) => {
    data.email = user?.email
    data.SpotName = spot.name
    data.SpotPrice = spot.price
    data.TourDuration = spot.day
    data.status = "Pending"
    console.log(data)

    // post via axios //
    axios.post(`http://localhost:5000/booking`, data).then((res) => {
      if (res.data.insertedId) {
        alert("Booked Successfully !!")
        reset()
      }
    })
  }
  const { bookingId } = useParams()
  const [spot, setSpot] = useState({})
  useEffect(() => {
    fetch(`http://localhost:5000/spots/${bookingId}`)
      .then((res) => res.json())
      .then((data) => setSpot(data))
  }, [])
  return (
    <div className="container">
      <div className="row">
        <div className="details col-lg-6">
          <h1 className="text-warning">{spot.name}</h1>
          <hr />
          <img className="img-fluid" src={spot.image} alt="" />
          <p className="my-4 px-5">
            The world is a book and those who do not travel read only one
            page.Throughout our lives, people have thought that because we keep
            traveling and searching for new things to do, we are not focused.
            They have often thought we were flaky or unfocused. But travel
            helped us find our purpose and put focus into our lives. The more we
            got lost in our travels, the richer our lives became.
          </p>
          <h3>
            Cost perHead :{" "}
            <span className="text-danger fw-bolder">${spot.price} perDay</span>
          </h3>
          <p>
            Duration :{" "}
            <span className="text-danger fw-bolder">{spot.day} days</span>
          </p>
        </div>
        <div className="order-info col-lg-6">
          <h2 className="text-warning bg-light py-2"> Confirm Your Order</h2>
          <form className="booking-form" onSubmit={handleSubmit(onSubmit)}>
            <input
              readOnly
              placeholder="email"
              type="email"
              defaultValue={user.email}
              {...register("email")}
            />

            <input
              placeholder="your name"
              type="text"
              defaultValue={user?.name}
              {...register("user name", { required: true })}
            />

            <input
              type="text"
              readOnly
              defaultValue={spot.name}
              {...register("SpotName")}
            />
            <input
              readOnly
              type="number"
              defaultValue={spot.price}
              {...register("SpotPrice")}
            />

            <input {...register("zipode")} placeholder="zip code" />
            <input
              {...register("address", { required: true })}
              placeholder="address"
            />
            <input
              {...register("phone", { required: true })}
              placeholder="phone"
            />

            <input type="submit" value="Confirm Order" className="btn1" />
          </form>
        </div>
      </div>
    </div>
  )
}

export default Booking
