import React from 'react'
import "../App.css"

function Textbox({ofType, st}) {
  return (
    <div>
      <input type={ofType} className={`${st} input-text`} />
    </div>
  )
}

export default Textbox
