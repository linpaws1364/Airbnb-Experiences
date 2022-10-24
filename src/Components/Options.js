import React from 'react'
import './Options.css'

function Options(props) {
  return (
    <div className='options'>
      {/* The scrollable options in second section */}
        <span className='optionCards'>{props.title}</span>
    </div>
  )
}

export default Options