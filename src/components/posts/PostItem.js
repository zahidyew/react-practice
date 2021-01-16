import React from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'

const PostItem = ({post}) => {
   // we want to pass the param: postId to the Comments page/component
   // this way, we only fetch the comments that belong to the post 
   const pageUrl = `/comments/${post.id}`

   return (
      <div className="content-div">
         <h3> {post.id}. {post.title} </h3>
         <p> {post.body} </p>
         <Link to={pageUrl}>See comments</Link>
      </div>
   )
}

PostItem.propTypes = {
   post: PropTypes.object
}

export default PostItem
