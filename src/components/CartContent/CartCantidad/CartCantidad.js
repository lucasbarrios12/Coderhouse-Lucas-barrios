import React, { useContext } from 'react'
import "./CartCantidad.css"
import { ItemsContext } from '../../../context/ItemsContext'


const CartCantidad = ({ pelicula, quanty }) => {

    const { cart, setCart, carritoCompra } = useContext(ItemsContext);

    const decrease = () => {
        const existe = cart.find((item) => item.id === pelicula.id);

        existe.cantidad !== 1 && setCart(cart.map((item) => (item.id === pelicula.id ? {...pelicula, cantidad: existe.cantidad - 1} : item)));
    };


  return (
    <div className='container-cantidad'>
        <p className='operadores' onClick={decrease}>-</p>
        <p>{pelicula.cantidad}</p>
        <p className='operadores'  onClick={() => carritoCompra({pelicula})}>+</p>
    </div>
  )
}

export default CartCantidad