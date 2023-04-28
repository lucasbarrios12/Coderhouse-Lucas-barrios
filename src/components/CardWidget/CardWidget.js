import * as React from 'react';

import "./CardWidget.css"


const CardWidget = ({ peliculasData }) => {
  return (

      <div className='card-container'>
        <img className='pelicula-poster' src={peliculasData.poster} alt={peliculasData.pelicula}/>
        <h3 className='pelicula-titulo'>{peliculasData.pelicula}</h3>
        <p className='pelicula-salida' > {peliculasData.año}</p>
      </div>
  );
} 

export default CardWidget
