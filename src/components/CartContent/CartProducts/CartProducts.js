import React from 'react'
import { useContext } from 'react';
import { ItemsContext } from '../../../context/ItemsContext';
import CartCantidad from '../CartCantidad/CartCantidad';
import "./CartProducts.css"


const CartProducts = () => {
  const { cart, setCart } = useContext(ItemsContext);

  const deletePelicula = (id) => {
    const foundId = cart.find((element)=> element.id === id);

    const newArray = cart.filter((element)=> {
        return element !== foundId;
    })
    setCart(newArray)
  }
    
  return cart.map((pelicula) => {
    return(
    <div className='carrito-container' key={pelicula.id}> 

        <img className='poster-carrito' src={pelicula.poster} alt='pelicula poster'/>
        
        <div className='carrito-info'>
            <h3 className='carrito-texto'>{pelicula.pelicula}</h3>
            <CartCantidad pelicula={pelicula}/>
            <p>Precio: ${pelicula.precio * pelicula.cantidad}</p>
        </div>
        <p className='cruz' onClick={()=> deletePelicula(pelicula.id)}>X</p>
          
    </div>
    )})
    
    
  };


export default CartProducts

