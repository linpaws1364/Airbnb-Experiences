import React from 'react'
import "./CardHead.css"
import { ChevronLeft } from '@mui/icons-material'
import { ChevronRight } from '@mui/icons-material'

function CardHead() {
  return (
    <div className='cardsHead'>
      {/* heading of Top Releases section */}
      <span className="cardheadName">Top Releases</span>
      <div className='showAll'>
        Show (107)
        <ChevronLeft className='controlButtons'/>
        <ChevronRight className='controlButtons'/>
      </div>
      
    </div>
  )
}

export default CardHead
