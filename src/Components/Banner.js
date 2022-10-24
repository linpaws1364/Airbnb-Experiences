import React from 'react'
import './Banner.css'

function Banner(props) {

  return (
    <div className='banner'>
      {/* Banner Cards */}
      <div className='collection'>Collection</div>
      <div className='details'>{props.des}</div>
      <div className='show'>Show all</div>
      <img className="banner-images" src={require(`../images/${props.img}`)} alt="airbnb"/>
    </div>
  )
}

export default Banner
