import React from 'react'
import PropTypes from 'prop-types'
//import {Link} from 'react-router-dom'
import Comments from '../comments/Comments'
import '../../css/Comments.css'

const PostItem = ({post}) => {
   // we want to pass the param: postId to the Comments page/component
   // this way, we only fetch the comments that belong to the post 
   //const pageUrl = `/comments/${post.id}`
   //let showHideText = '\u25BE See Comments'
   //const toggle = document.getElementById('toggle')

   const showComments = (id) => {
      //console.log('clicked')
      const commentsDiv = document.getElementById('comments' + id)

      if(commentsDiv.className.includes('hide')) {
         commentsDiv.className = commentsDiv.className.replace('hide', 'show')
         //toggle.innerHTML = '\u25B4 Hide Comments'
      }
      else {
         commentsDiv.className = commentsDiv.className.replace('show', 'hide')
         //showHideText = '\u25BE See Comments'
      }

   }
   //&#9652 up arrow

   return (
      <div className="content-div">
         <h3> {post.id}. {post.title} </h3>
         <p> {post.body} </p>
         {/* <Link to={pageUrl}>See comments</Link> */}

         <p id="toggle" onClick={() => showComments(post.id)}> &#x25BE; Show Comments</p>
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
