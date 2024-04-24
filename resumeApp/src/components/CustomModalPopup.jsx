import React from 'react'

export default function CustomModalPopup({name,content,onClose}) {
    
  return (
    <div>
        <h1>{name}</h1>
        <p>{content}</p>
        <button onClick={onClose}> Close</button>
    </div>
  )
}
