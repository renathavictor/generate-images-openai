import React, { ReactNode, MouseEventHandler } from 'react'
import Loading from '../loading'
import './styles.css'

interface NuttonProps {
  isLoading?: boolean,
  isDisabled?: boolean,
  onClick: MouseEventHandler<HTMLButtonElement> | undefined,
  children: ReactNode
}

const Button = ({ children, isLoading, isDisabled, onClick }: NuttonProps) => {
  return (
    <button
      disabled={isLoading}
      onClick={onClick}
    >
      {isLoading
        ? (<div className='loading-btn'>
          <Loading /> {children}
        </div>)
        : children
      }
    </button>
  )
}

export default Button