import React from "react"
import { useForm } from "react-hook-form"
import css from "./contact.css"
import image from "../../../images/kate-macate-xmddEHyCisc-unsplash.jpg"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faPhone,
  faLocationArrow,
  faStreetView
} from "@fortawesome/free-solid-svg-icons"

const phone1 = <FontAwesomeIcon icon={faPhone} />
const maps = <FontAwesomeIcon icon={faLocationArrow} />
const street = <FontAwesomeIcon icon={faStreetView} />

const ContactUs = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors }
  } = useForm()
  const onSubmit = (data) => {
    console.log(data)
  }
  return (
    <div>
      <div className="cu-img p-4 mb-4">
        <div className="overlay">
          <h1 className="text-warning">Contact us </h1>
        </div>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-12">
            <img class="img-fluid mt-5 pt-4" src={image} alt="" />
            <div>
              <ul className="text-dark">
                <li>
                  {phone1} <a href="">01765871554</a>
                </li>
                <li>{maps}Brahmanbaria, Bangladesh</li>
                <li>{street}123 street, South North</li>
              </ul>
            </div>
          </div>
          <div className="col-lg-6 col-md-12">
            {/* react hook form */}
            <form className="contact-form" onSubmit={handleSubmit(onSubmit)}>
              <h2 className="c-heading">Fillup The Form</h2>
              <input {...register("name")} placeholder="name" />

              <input
                {...register("email", { required: true })}
                placeholder="email"
              />
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
              <input
                {...register("phone", { required: true })}
                placeholder="phone"
              />
              <textarea
                id="w3review"
                name="w3review"
                rows="4"
                cols="35"></textarea>
              <input className="btn1" type="submit" value="Send Feedback" />
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactUs
