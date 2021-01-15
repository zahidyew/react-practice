import {useState, useEffect} from 'react'
import CommentItem from './CommentItem'

const Comments = () => {
   const [comments, setComments] = useState([])

   useEffect(() => {
      const fetchComments = async () => {
         const url = 'https://jsonplaceholder.typicode.com/comments'
         const response = await fetch(url)
         const data = await response.json()

         console.log(data)
         setComments(data)
      }
      fetchComments()
   }, [])

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
