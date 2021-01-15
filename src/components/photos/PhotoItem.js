import React from 'react'
import PropTypes from 'prop-types'

const PhotoItem = ({photo}) => {
   return (
      <div className="content-div">
         <h3> {photo.id}. {photo.title} </h3>
      </div>
   )
}

PhotoItem.propTypes = {
   photo: PropTypes.object
}

export default PhotoItem
