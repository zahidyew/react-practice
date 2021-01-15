import React from 'react'
import PropTypes from 'prop-types'

const TodoItem = ({todo}) => {
   return (
      <div className="content-div">
         <p> {todo.id}. {todo.title} </p>
      </div>
   )
}

TodoItem.propTypes = {
   todo: PropTypes.object
}

export default TodoItem
