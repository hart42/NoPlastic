import React from 'react'
import './style.css'

const CustomButton = ({text, className}) => {
  return <button className={className === 'yellow' ? 'button__yellow button' : 'button__green button'}>{text}</button>
}

export default CustomButton