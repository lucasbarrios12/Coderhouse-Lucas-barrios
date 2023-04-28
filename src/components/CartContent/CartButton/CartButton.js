import React from 'react'
import { Link } from 'react-router-dom'
import "./CartButton.css"

const CartButton = () => {
  return (
    <div>
        <Link to="/comprafinal" className='boton-compra'>Terminar Compra</Link>
    </div>
  )
}

export default CartButton