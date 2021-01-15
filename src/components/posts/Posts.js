import {useState, useEffect} from 'react'

import PostItem from './PostItem'

const Posts = () => {
   const [posts, setPosts] = useState([])

   useEffect(() => {
      const fetchPosts = async () => {
         const response = await fetch('https://jsonplaceholder.typicode.com/posts')
         const data = await response.json(response)

         console.log(data)
         setPosts(data)
      }
      fetchPosts()
   }, [])

   return (
      <div>
         {posts.map( item => {
            return (
               <PostItem key={item.id} post={item} />
            )
         })}
      </div>
   )
}

export default Posts