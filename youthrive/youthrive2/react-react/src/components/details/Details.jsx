import React from 'react'
import { useParams } from 'react-router-dom'

const Details = () => {
  let {id} =useParams();
  return (
    <div><h2>Details 4 :{id}</h2></div>
  )
}

export default Details