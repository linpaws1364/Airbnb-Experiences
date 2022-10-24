import React from 'react'
import "./BannerHead.css"
import Banner from './Banner'
import { ChevronLeft } from '@mui/icons-material'
import { ChevronRight } from '@mui/icons-material'

function BannerHead() {

  return (
    <div className='bannersHead'>
      {/* Heading of Banner section */}
      <span className="headName">New this week</span>
      <div>
        <ChevronLeft className='controlButtons'/>
        <ChevronRight className='controlButtons'/>
      </div>
      
    </div>
  )
}

export default BannerHead
