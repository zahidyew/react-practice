import React from 'react'
import {Link} from 'react-router-dom'
import PropTypes from 'prop-types'

const AlbumItem = ({album}) => {
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
