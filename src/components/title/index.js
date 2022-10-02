import React from 'react'
import './style.scss'

export const Title = ({title}) => {
  return (
    <div className="title">
        <h2 className="title-text">{title}</h2>
      </div>
  )
}
