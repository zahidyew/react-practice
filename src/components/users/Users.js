import {useState, useEffect} from 'react'
import UserItem from './UserItem'

const Users = () => {
   const [users, setUsers] = useState([])

   useEffect(() => {
      const fetchUsers = async () => {
         const url = 'https://jsonplaceholder.typicode.com/users'
         const response = await fetch(url)
         const data = await response.json()

         console.log(data)
         setUsers(data)
      }  
      fetchUsers()
   }, [])

   return (
      <div>
         {users.map(item => {
            return (
               <UserItem key={item.id} user={item} />
            )
         })}
      </div>
   )
}

export default Users
