import React from 'react'

function Button({ofText, btnstyle}) {
  return (
    <button class={btnstyle}>
      {ofText}
    </button>
  )
}

export default Button
