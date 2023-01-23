import React, { ChangeEventHandler } from 'react'
import './styles.css'

interface InputProps {
  onChange: ChangeEventHandler<HTMLInputElement> | undefined,
  placeholder: string
}

const Input = ({ onChange, placeholder }: InputProps) => {
  return (
    <input
      className='input-container'
      onChange={onChange}
      placeholder={placeholder}
    />
  )
}

export default Input