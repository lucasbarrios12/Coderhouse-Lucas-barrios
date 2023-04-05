import axios from 'axios';
import React, { useEffect, useState} from 'react';
import "./CardList.css"

import CardWidget from '../CardWidget/CardWidget';

import {Link} from "react-router-dom"

const CardList = () => {
    const [products, setProducts] = useState([]);

     useEffect (() => {
        axios("https://jsonplaceholder.typicode.com/users").then((res) => 
            setProducts(res.data)
        );
     }, []);

  return (
    <div className='container'>
        {products.map((products)  => {
            return(
                <div key={products.id}>
                    <Link to={`/detail/${products.id}`}>
                        <CardWidget data={products}/>
                    </Link>
                </div>
                
            )
        })}
    </div>
  )
}

export default CardList