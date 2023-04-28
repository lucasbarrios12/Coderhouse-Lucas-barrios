import React from 'react'

import CardList from '../../components/CardList/CardList'
import "./inicio.css"
import BasicMenu from '../../components/Dashboard/Dashboard'

const Inicio = () => {
  return (
    <div>
      <div className='menu-tienda'>
        <h2>CATALOGO</h2>
        <BasicMenu />
      </div>
      <div className='container'>

        <CardList />
      </div>
    </div>
    
  )
}

export default Inicio