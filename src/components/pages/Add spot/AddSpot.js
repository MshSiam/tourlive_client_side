import React from "react"
import css from "./addspot.css"
import { useForm } from "react-hook-form"
import axios from "axios"

const AddSpot = () => {
  const { register, handleSubmit, reset } = useForm()

  const onSubmit = (data) => {
    console.log(data)

    // axios post //
    axios.post("http://localhost:5000/spots", data).then((res) => {
      if (res.data.insertedId) {
        alert("Spot Added !!")
        reset()
      }
    })
  }
  return (
    <div className="container spot-container">
      <h1 className="spot-heading my-5 text-primary">Add a New Spot</h1>

      {/* hook form */}
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          placeholder="spot's name"
          {...register("name", { required: true })}
        />

        <input
          placeholder="tour duration"
          type="number"
          {...register("day", { required: true })}
        />
        <input
          placeholder="booking price"
          type="number"
          {...register("price", { required: true })}
        />
        <input
          type="text"
          placeholder="image-url"
          {...register("image", { required: true })}
        />

        <input className="btn1" type="submit" />
      </form>
    </div>
  )
}

export default AddSpot
