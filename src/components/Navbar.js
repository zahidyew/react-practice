import React from 'react'
import { Link } from 'react-router-dom';

const Navbar = () => {
   return (
      <>
         <ul>
            <li><Link to="/"> <span> Posts </span> </Link></li>
            <li><Link to="/todos"> <span> Todos </span> </Link></li>
            <li><Link to="/comments"> <span> Comments </span> </Link></li>
            <li><Link to="/albums"> <span> Albums </span> </Link></li>
            <li><Link to="/photos"> <span> Photos </span> </Link></li>
            <li><Link to="/users"> <span> Users </span> </Link></li>
         </ul>
      </>
   )
}

export default Navbar
