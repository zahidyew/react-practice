import React from 'react'
import {Link} from 'react-router-dom'
import PropTypes from 'prop-types'

const AlbumItem = ({album}) => {
   // we want to pass the param: albumId to the Photos page/component
   // this way, we only fetch the photos that belong to the albums 
   const pageUrl = '/photos/' + album.id

   return (
      <div className="content-div">
         <p> {album.id}. {album.title} </p>
         <Link to={pageUrl}> See Photos </Link>
      </div>
   )
}

AlbumItem.propTypes = {
   album: PropTypes.object
}

export default AlbumItem
