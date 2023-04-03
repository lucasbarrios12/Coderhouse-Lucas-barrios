import React from 'react'
import CartWidget from '../CartWidget/CartWidget'
import "./Navbar.css"
import { Link } from 'react-router-dom'


const Navbar = () => {
  return (
    <div className='nav'>
        <h1 className='no-margin'>My Brand</h1>
        <ul className='nav-list no-margin'>
            <Link to="/" className='nav-item' >INICIO</Link>
            <Link to="/tienda" className='nav-item'>TIENDA </Link>
            <Link to="/recomendaciones" className='nav-item'>RECOMENDACIONES</Link>
            <li className='cart'>
                <CartWidget />
                <span>5</span>
            </li>
        </ul>
    </div>
  )
}

export default Navbar