import React from 'react'
import PropTypes from 'prop-types'

const PhotoItem = ({photo}) => {
   return (
      <div className="photo-child">
         <p> {photo.id}. {photo.title} </p>
         <img src={photo.thumbnailUrl}></img>
      </div>
   )
}

PhotoItem.propTypes = {
   photo: PropTypes.object
}

export default PhotoItem
