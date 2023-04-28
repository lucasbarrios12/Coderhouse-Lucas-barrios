import React, {  useState, createContext } from 'react';

export const ItemsContext = createContext();



export const ItemsProvider = ({ children }) => {
	const [cart, setCart] = useState([]);

	function carritoCompra({ pelicula }) {
		const existe = cart.find((item) => item.id === pelicula.id);
	
		if(existe) {
		  setCart(cart.map((item) => (item.id === pelicula.id ? {...pelicula, cantidad: existe.cantidad + 1} : item)));
		}else {
		  setCart([...cart, pelicula]);
		}
		
	
	  }
	  

	return (
		<ItemsContext.Provider value={{cart, setCart, carritoCompra}}>
			{children}
		</ItemsContext.Provider>
	);
};
