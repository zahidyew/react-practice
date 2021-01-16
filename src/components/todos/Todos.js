import {useState, useEffect} from 'react'
import TodoItem from './TodoItem'

const Todos = ({match}) => {
   const [todos, setTodos] = useState([])

   useEffect(() => {
      const fetchTodos = async () => {
         const url = 'https://jsonplaceholder.typicode.com/todos?userId=' + match.params.userId
         const response = await fetch(url)
         const data = await response.json()

         //console.log(data)
         setTodos(data)
      }
      fetchTodos()
   }, [match.params.userId])

   return (
      <div>
         {todos.map(item => {
            return (
               <TodoItem key={item.id} todo={item} />
            )
         })}
      </div>
   )
}

export default Todos
