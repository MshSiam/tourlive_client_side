import React from "react"
import { useForm } from "react-hook-form"
import css from "./contact.css"

const ContactUs = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors }
  } = useForm()
  const onSubmit = (data) => console.log(data)
  return (
    <div>
      <div className="cu-img p-4 mb-4">
        <div className="overlay">
          <h1 className="text-warning">Contact us </h1>
        </div>
      </div>

      {/* react hook form */}

      <form className="contact-form" onSubmit={handleSubmit(onSubmit)}>
        <h2 className="c-heading">Fillup The Form</h2>
        <input {...register("name")} placeholder="name" />

        <input {...register("email", { required: true })} placeholder="email" />
        <div className="error-div">
          {errors.email && (
            <span className="error">This field is required</span>
          )}
        </div>

        <input {...register("zipode")} placeholder="zip code" />
        <input
          {...register("address", { required: true })}
          placeholder="address"
        />
        <input {...register("phone", { required: true })} placeholder="phone" />
        <textarea id="w3review" name="w3review" rows="4" cols="35"></textarea>
        <input className="btn1" type="submit" />
      </form>
    </div>
  )
}

export default ContactUs
