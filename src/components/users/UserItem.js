import React from 'react'
import {Link} from 'react-router-dom'
import PropTypes from 'prop-types'

const UserItem = ({user}) => {
   const pageUrl = '/todos/' + user.id

   return (
      <div className='content-div'>
         <h3> {user.id}. {user.name} </h3>
         <p> {user.email} </p>
         <Link to={pageUrl}> <span className="links"> View Todos &#x2192; </span> </Link>
      </div>
   )
}

UserItem.propTypes = {
   user: PropTypes.object
}

export default UserItem
