import "./ItemDetail.css"
import { ItemsContext } from '../../context/ItemsContext'
import { useContext } from "react";



const ItemDetail = ({pelicula}) => {

  const { carritoCompra } = useContext(ItemsContext);




  return (
    <div className='itemContainer'>

        <img className='pelicula-img' src={pelicula.poster}/>
        
        <div className='item-info'>
          <h2>{pelicula.pelicula} - "{pelicula.año}"</h2>
          <p className='item-etiqueta'>Sinopsis:</p>
          <p>{pelicula.sinopsis}</p>

          <p className='item-etiqueta'>Genero: <span className='genero'>{pelicula.genero}</span></p>
          
          <button className='button'  onClick={() => carritoCompra({pelicula})}>Añadir al Carrito</button>
        </div>
        
    </div>
  )
  
}

export default ItemDetail