import {useState, useEffect} from 'react'
import PropTypes from 'prop-types'
import CommentItem from './CommentItem'

const Comments = ({postId}) => {
   const [comments, setComments] = useState([])

   useEffect(() => {
      const fetchComments = async () => {
         const url = 'https://jsonplaceholder.typicode.com/comments?postId=' + postId
         const response = await fetch(url)
         const data = await response.json()

         //console.log(data)
         setComments(data)
      }
      fetchComments()
   }, [postId])

   return (
      <>
         {comments.map(item => {
            return (
               <CommentItem key={item.id} comment={item} />
            )
         })}
      </>
   )
}

Comments.propTypes = {
   postId: PropTypes.number
}

export default Comments


/* // the props match, location & history are passed by default to the component when using Route path
const Comments = ({match}) => {
   const [comments, setComments] = useState([])
   //console.log(match)

   useEffect(() => {
      const fetchComments = async () => {
         const url = 'https://jsonplaceholder.typicode.com/comments?postId=' + match.params.postId
         const response = await fetch(url)
         const data = await response.json()

         //console.log(data)
         setComments(data)
      }
      fetchComments()
   }, [match.params.postId])

   return (
      <div>
         {comments.map(item => {
            return (
               <CommentItem key={item.id} comment={item} />
            )
         })}
      </div>
   )
}

export default Comments
 */