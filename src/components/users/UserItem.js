import React from 'react'
import PropTypes from 'prop-types'

const UserItem = ({user}) => {
   return (
      <div className='content-div'>
         <h3> {user.id}. {user.name} </h3>
         <p> {user.email} </p>
      </div>
   )
}

UserItem.propTypes = {
   user: PropTypes.object
}

export default UserItem
