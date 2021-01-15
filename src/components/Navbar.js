import { Link } from 'react-router-dom';
import '../css/Navbar.css'

const Navbar = () => {
   const showMenu = () => {
      //console.log('clicked')
      const miniNavbar = document.getElementById('mini-navbar')

      if (miniNavbar.className.includes('show-menus')) {
         miniNavbar.className = miniNavbar.className.replace('show-menus','')
      }
      else {
         miniNavbar.className += 'show-menus'
      }
   }

   return (
      <>
         <ul className="navbar">
            <li id="burgerMenu" onClick={() => showMenu()}> <span> &#8801; </span> </li>
            <li className="navbar-options"><Link to="/"> <span> Posts </span> </Link></li>
            <li className="navbar-options"><Link to="/todos"> <span> Todos </span> </Link></li>
            <li className="navbar-options"><Link to="/comments"> <span> Comments </span> </Link></li>
            <li className="navbar-options"><Link to="/albums"> <span> Albums </span> </Link></li>
            <li className="navbar-options"><Link to="/photos"> <span> Photos </span> </Link></li>
            <li className="navbar-options"><Link to="/users"> <span> Users </span> </Link></li>
         </ul>

         {/* Navbar for smaller screen */}
         <ul id="mini-navbar" className="">
            <li onClick={() => showMenu()}><Link to="/"> <span> Posts </span> </Link></li>
            <li onClick={() => showMenu()}><Link to="/todos"> <span> Todos </span> </Link></li>
            <li onClick={() => showMenu()}><Link to="/comments"> <span> Comments </span> </Link></li>
            <li onClick={() => showMenu()}><Link to="/albums"> <span> Albums </span> </Link></li>
            <li onClick={() => showMenu()}><Link to="/photos"> <span> Photos </span> </Link></li>
            <li onClick={() => showMenu()} /* onClick={() => showMenu()} */><Link to="/users"> <span> Users </span> </Link></li>
         </ul>
      </>
   )
}

export default Navbar
