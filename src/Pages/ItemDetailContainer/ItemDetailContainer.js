import React, { useEffect, useState} from 'react';
import axios from 'axios';
import "../../components/CardList/CardList.css"
import { useParams } from 'react-router-dom';
import ItemDetail from '../../components/ItemDetail/ItemDetail';
import "./ItemDetailContainer.css"

const ItemDetailContainer = () => {
    const [product, setProduct] = useState([]);

    let {id} = useParams()

    useEffect (() => {
        axios(`https://jsonplaceholder.typicode.com/users/${id}`).then((res) => 
            setProduct(res.data)
        );
     }, [id]);

  return (
    <div className='center'>
        <h1>Detalles del Producto</h1>
        <ItemDetail data={product}/>
    </div>
  )
}

export default ItemDetailContainer