import React from 'react'
import "../App.css"

function Contacthp({title, info}) {
  return (
    <div>
      <p className='h5'>{title}</p>
      <p className='text-small'>{info}</p>
    </div>
  )
}

export default Contacthp
