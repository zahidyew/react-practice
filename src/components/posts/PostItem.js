import {useState} from 'react'
import PropTypes from 'prop-types'
import Comments from '../comments/Comments'
import '../../css/Comments.css'

const PostItem = ({post}) => {
   const [text, setText] = useState('\u25BE View Comments')

   const showComments = (id) => {
      const commentsDiv = document.getElementById('comments' + id)

      if(commentsDiv.className.includes('hide')) {
         commentsDiv.className = commentsDiv.className.replace('hide', 'show')
         setText('\u25B4 Hide Comments')
      }
      else {
         commentsDiv.className = commentsDiv.className.replace('show', 'hide')
         setText('\u25BE View Comments')
      }
   }

   return (
      <div className="content-div">
         <h3> {post.id}. {post.title} </h3>
         <p> {post.body} </p>
         <p id="toggle" onClick={() => showComments(post.id)}> {text} </p>

         <div id={'comments' + post.id} className="hide">
            <Comments postId={post.id} />
         </div>

      </div>
   )
}

PostItem.propTypes = {
   post: PropTypes.object
}

export default PostItem
