import { useContext } from 'react'
import { ItemsContext } from '../../../context/ItemsContext'


const CartItems = () => {

    const { cart } = useContext(ItemsContext);

    const itemsCantidad = cart.reduce((acc, film) => acc + film.cantidad, 0)

  return (
    <span>{itemsCantidad}</span>
  )
}

export default CartItems