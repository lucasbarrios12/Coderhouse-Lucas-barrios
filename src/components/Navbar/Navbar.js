import React from 'react'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

import "./Navbar.css"
import { Link } from 'react-router-dom'
import CartItems from '../CartContent/CartItems/CartItems';


const Navbar = () => {
  return (
    <div className='nav'>
        <h1 className='no-margin'>My Brand</h1>
        <ul className='nav-list no-margin'>
            <Link to="/" className='nav-item' >INICIO</Link>
            <Link to="/contacto" className='nav-item'>CONTACTO </Link>
            <Link to="/about" className='nav-item'>SOBRE NOSOTROS</Link>
            <Link to="/cart" className='nav-item'><ShoppingCartIcon /><CartItems/></Link>
        </ul>
    </div>
  )
}

export default Navbar