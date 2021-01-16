import React from 'react'
import PropTypes from 'prop-types'

const PhotoItem = ({photo}) => {
   return (
      <div className="content-div">
         <p> {photo.id}. {photo.title} </p>
      </div>
   )
}

PhotoItem.propTypes = {
   photo: PropTypes.object
}

export default PhotoItem
