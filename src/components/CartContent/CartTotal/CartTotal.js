import { useContext } from 'react'
import { ItemsContext } from '../../../context/ItemsContext'
import "./CartTotal.css"

export const CartTotal = () => {

    const { cart } = useContext(ItemsContext);

    const total = cart.reduce((acc,film)=> acc + film.precio * film.cantidad, 0)

  return (
    <div className='precio-total'>Precio Total: ${total} </div>
  )
}
