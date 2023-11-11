import React from 'react'
import {MdArrowForwardIos} from 'react-icons/md'
import './BlueSection.css'

function BlueSection() {
  return (
    <div className='bluee'>
        <div className='body'>
            <h3>Looking to go elsewhere?</h3>
            <button>Our destinations <MdArrowForwardIos className='arrow'/></button>
        </div>
    </div>
  )
}

export default BlueSection