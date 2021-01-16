import {useState, useEffect} from 'react'
import CommentItem from './CommentItem'

// the props match, location & history are passed by default to the component when using Route path
const Comments = ({match}) => {
   const [comments, setComments] = useState([])
   //console.log(match)

   useEffect(() => {
      const fetchComments = async () => {
         const url = 'https://jsonplaceholder.typicode.com/comments?postId=' + match.params.postId
         const response = await fetch(url)
         const data = await response.json()

         console.log(data)
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
