import React from 'react'

function Button({title,svg,varient ,...rest}) {
  return (
    <button {...rest} className={`py-2 flex items-center rounded-2xl cursor-pointer px-4 ${varient}`}>{title}{svg}</button>
  )
}

export default Button