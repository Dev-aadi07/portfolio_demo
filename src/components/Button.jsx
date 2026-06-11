import React from 'react'

const Button = ({text, icon, className}) => {
  return (
    <button 
      className={className}
    >
      {text}
      {icon}
    </button>
  )
}

export default Button