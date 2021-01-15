import React from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'

const PostItem = ({post}) => {
   return (
      <div className="content-div">
         <h3> {post.id}. {post.title} </h3>
         <p> {post.body} </p>
         <Link to="/comments">See comments</Link>
      </div>
   )
}

PostItem.propTypes = {
   post: PropTypes.object
}

export default PostItem
