import React from 'react'
import PropTypes from 'prop-types'

const PostItem = ({post}) => {
   return (
      <div className="content-div">
         <h3> {post.id}. {post.title} </h3>
         <p> {post.body} </p>
      </div>
   )
}

PostItem.propTypes = {
   post: PropTypes.object
}

export default PostItem
