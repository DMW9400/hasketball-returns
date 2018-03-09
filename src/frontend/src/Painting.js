import React from 'react'

const Painting = (props) =>{
  return(
    <div className='painting-div'>
      <img src={props.painting.image} alt=''/>
      <h4>{props.painting.title} - {props.painting.artist.name}</h4>
      <p>{props.painting.date}</p>
    </div>
  )
}

export default Painting
