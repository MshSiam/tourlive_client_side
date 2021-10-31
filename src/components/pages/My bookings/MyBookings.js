import React, { useEffect, useState } from "react"
import { Table } from "react-bootstrap"
import { useParams } from "react-router"
import useAuth from "../../hooks/useAuth"
import css from "./bookin.css"

const MyBookings = () => {
  const { user } = useAuth()
  const { email } = useParams()
  const [orders, setOrders] = useState([])

  const handleUpdate = (id) => {
    const updateStatus = { status: "Approved" }
    const url = `https://eerie-tomb-25454.herokuapp.com/booking/${id}`
    fetch(url, {
      method: "PUT",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify(updateStatus)
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
        if (data.modifiedCount) {
          alert("Update Succeflly")
          fetch(`https://eerie-tomb-25454.herokuapp.com/booking/${user?.email}`)
            .then((res) => res.json())
            .then((data) => {
              setOrders(data)
              console.log(data)
            })
        }
      })
  }

  //   This is For Delete

  const handleDeelete = (id) => {
    const url = `https://eerie-tomb-25454.herokuapp.com/booking/${id}`
    fetch(url, {
      method: "DELETE"
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
        if (data.deletedCount) {
          alert("delete Succeflly")
          const remaining = orders.filter((order) => order._id !== id)
          setOrders(remaining)
        }
      })
  }

  useEffect(() => {
    console.log(user?.email)
    fetch(`https://eerie-tomb-25454.herokuapp.com/booking/${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        setOrders(data)
        console.log(data)
      })
  }, [user.email])
  return (
    <div className="container">
      <div className="row my-orders-main">
        <div className="">
          <h2 className="text-center">All Orders :{orders.length}</h2>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>User Name</th>
                <th>Spot Name</th>
                <th>Phone Number</th>
                <th>Status</th>
              </tr>
            </thead>
            {orders.map((order) => (
              <tbody key={order._id}>
                <tr>
                  <td>{order.userName}</td>
                  <td>{order.SpotName}</td>
                  <td>{order.phone}</td>
                  <td className="text-warning fw-bold">{order.status}</td>
                  <td>
                    <div className="btn-all-table">
                      <button
                        onClick={() => handleUpdate(order._id)}
                        className="btn-action btn-success">
                        Approved
                      </button>

                      <button
                        className="btn-danger"
                        onClick={() => handleDeelete(order._id)}>
                        X
                      </button>
                    </div>
                  </td>
                </tr>
              </tbody>
            ))}
          </Table>
        </div>
      </div>
    </div>
  )
}

export default MyBookings
