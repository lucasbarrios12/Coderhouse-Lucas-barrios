import React from 'react'
import "./cart.css"
import CartProducts from '../../components/CartContent/CartProducts/CartProducts';
import { CartTotal } from '../../components/CartContent/CartTotal/CartTotal';
import { useContext } from 'react'
import { ItemsContext } from '../../context/ItemsContext'
import CartButton from '../../components/CartContent/CartButton/CartButton';


const Cart = () => {


    const { cart } = useContext(ItemsContext);



    return cart.length > 0 ? (
    <div className='carrito'> 

        <CartProducts />
        <div className='cart-inferior'>
            <CartButton />
            <CartTotal/>
        </div>
        

          
    </div>
    ): (
        <h2 className='empty'>El carrito esta vacio</h2>
    )
};
    
    


export default Cart;

