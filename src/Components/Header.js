import React from 'react'
import './Header.css'
import { Language } from '@mui/icons-material'
import { Avatar } from '@mui/material'
import { Dehaze } from '@mui/icons-material'

function Header() {
  return (
    <div className='header'>
      {/* header icon of airbnb */}
      <img className="header_icon" src={require("../images/airbnb.png")} alt="airbnb"/>
      {/* the right section in header */}
      <div className='header_right'>
        <p>Become a Host</p>
        {/* globe icon */}
        <div className='globe'><Language/></div>
        {/* avatar and three lines */}
        <div className='profile'>        
        <Dehaze style={{marginRight:"10px"}}/><Avatar/>
        </div>
      </div>
    </div>
  )
}

export default Header;
