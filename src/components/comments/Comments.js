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