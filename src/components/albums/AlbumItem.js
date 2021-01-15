import React from 'react'
import PropTypes from 'prop-types'

const AlbumItem = ({album}) => {
   return (
      <div className="content-div">
         <p> {album.id}. {album.title} </p>
      </div>
   )
}

AlbumItem.propTypes = {
   album: PropTypes.object
}

export default AlbumItem
