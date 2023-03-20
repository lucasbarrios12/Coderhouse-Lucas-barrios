import React from 'react'
import CartWidget from '../CartWidget/CartWidget'
import "./Navbar.css"

const Navbar = () => {
  return (
    <div className='nav'>
        <h1 className='no-margin'>My Brand</h1>
        <ul className='nav-list no-margin'>
            <li>
                <a className='nav-item' href=''>
                    INICIO
                </a>
            </li>
            <li>
                <a className='nav-item' href=''>
                    TIENDA
                </a>
            </li>
            <li>
                <a className='nav-item' href=''>
                    RECOMENDACIONES
                </a>
            </li>
            <li className='cart'>
                <CartWidget />
                <span>5</span>
            </li>
        </ul>
    </div>
  )
}

export default Navbar