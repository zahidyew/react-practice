import React from 'react'
import PropTypes from 'prop-types'

const CommentItem = ({comment}) => {
   return (
      <div className="content-div">
         <h3> {comment.id}. {comment.name} </h3>
         <p> {comment.body} </p>
         {/* <p> {comment.email} </p> */}
      </div>
   )
}

CommentItem.propTypes = {
   comment: PropTypes.object
}

export default CommentItem
