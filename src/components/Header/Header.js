import React from 'react'
import "./Header.css"
import Navbar from "../Navbar/Navbar";
import misionderescateposter from "./misionderestateposter.jpg"



const Header = () => {
  return (
    <div>
        <div> <Navbar /> </div>
        <div className='banner'>
          <div className='contenedor'>
            <div>
              <h2 className='title-banner'>MISION DE RESCATE</h2>
              <p>Tyler Rake, un intrépido mercenario, es enviado a Bangladesh por un poderoso mafioso encarcelado para que salve a su hijo secuestrado.</p>
              <button className='button-banner'>Conocer Mas</button>
            </div>
            <img className='banner-image' src={misionderescateposter} alt="El Rescate"/>
          </div>
        </div>
    </div>
  )
}

export default Header;