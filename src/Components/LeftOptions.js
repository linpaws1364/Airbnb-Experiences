import React from 'react'
import './LeftOptions.css'

function LeftOptions(props) {
  return (
    <div>
    <div className='leftoptions'>
      {/* the filters in second section */}
        <span className='leftoptionCards'>{props.title}</span>
    </div>
    </div>
  )
}

export default LeftOptions
