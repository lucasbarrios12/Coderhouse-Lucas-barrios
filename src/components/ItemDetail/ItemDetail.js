import React from 'react'
import img from "../CardWidget/producto.png"
import "./ItemDetail.css"

const ItemDetail = ({ data }) => {
  return (
    <div className='itemContainer'>

        <div>
            <img src={img}/>
        </div>
        <div className='itemInfo'>
          <h2>{data.name} - "{data.username}"</h2>
          <p>Email: {data.email}</p>
          <p>Phone: {data.phone}</p>
          <p>Website: {data.website}</p>
        </div>
   
    </div>
  )
}

export default ItemDetail