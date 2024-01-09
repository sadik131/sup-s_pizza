import React from 'react'

function Button({title,svg,varient}) {
  return (
    <div className={`py-2 flex items-center rounded-2xl cursor-pointer px-4 ${varient}`}>{title}{svg}</div>
  )
}

export default Button