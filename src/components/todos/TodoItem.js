import React from 'react'
import PropTypes from 'prop-types'

const TodoItem = ({todo}) => {
   return (
      <div className="content-div">
         {todo.completed 
            ? <p style={completedStyle}> {todo.id}. {todo.title} </p> 
            : <p> {todo.id}. {todo.title} </p>
         }
      </div>
   )
}

const completedStyle = {
   textDecoration: "line-through",
   fontWeight: "lighter",
   color: "gray"
}

TodoItem.propTypes = {
   todo: PropTypes.object
}

export default TodoItem
