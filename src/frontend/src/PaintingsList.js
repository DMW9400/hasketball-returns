import React from 'react'
import Painting from './Painting'

const PaintingsList = (props) => {


  let galleryByTitle = props.paintings.filter(painting => painting.title.toLowerCase().includes(props.filter.title.toLowerCase()))
  let galleryByDate = galleryByTitle.filter(painting => painting.date && painting.date.toLowerCase().includes(props.filter.date.toLowerCase()))
  let finalGallery = galleryByDate.map(p=> <Painting painting={p} key={p.id}/>)



  return(
    <div>
      {finalGallery}
    </div>
  )
}
export default PaintingsList
