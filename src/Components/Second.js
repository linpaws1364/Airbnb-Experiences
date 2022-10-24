import React from 'react'
import './Second.css'
import { FavoriteBorder } from '@mui/icons-material'

function Second(props) {
  return (
    <div className='card'>
      {/* favourite button */}
      <FavoriteBorder className='favourite'/>
      {/* Images of Cards under Top Releases */}
      <img className="card-images" src={require(`../images/${props.img}`)} alt="airbnb"/> 
      {/* Card details */}
      <div className="card-stats">
        <img className="card-star" src={require("../images/red-star.png")}/>
        <span>{props.rating}</span>
        <span className='greyy'>({props.reviewCount}) • </span>
        <span className='greyy'> {props.location}</span>
      </div>
      <p className='card-title'>{props.title}</p>
      <p className='card-price'><b>₹{props.price}</b> /person</p>
    </div>
  )
}

export default Second
