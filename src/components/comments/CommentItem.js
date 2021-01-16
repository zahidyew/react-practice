import React from 'react'
import PropTypes from 'prop-types'

const CommentItem = ({comment}) => {
   return (
      <div className="comments-div">
         <h5> {comment.name} <span> | ({comment.email}) </span> </h5>
         <p> {comment.body} </p>
      </div>
   )
}

CommentItem.propTypes = {
   comment: PropTypes.object
}

export default CommentItem
