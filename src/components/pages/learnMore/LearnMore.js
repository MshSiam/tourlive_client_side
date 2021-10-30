import React, { useEffect, useState } from "react"
import { useParams } from "react-router"

const LearnMore = () => {
  const { learnId } = useParams()
  const [datas, setDatas] = useState([])
  useEffect(() => {
    fetch("service.json")
      .then((res) => res.json())
      .then((data) => setDatas(data))
  }, [])

  // // filtering data // //
  const ExactIteam = datas.filter((id) => id === learnId)
  return (
    <div>
      <img src={ExactIteam.image} alt="" />
      <h2>Id : {ExactIteam?.id}</h2>
      <h3>Name : {ExactIteam?.name}</h3>
      <p>Details : {ExactIteam?.details}</p>
    </div>
  )
}

export default LearnMore
