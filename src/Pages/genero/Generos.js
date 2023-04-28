import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";


import {
    collection,
    query,
    getDocs,
    where,
  } from "firebase/firestore";

import "./Generos.css"
  
import { db } from "../../components/Firebase/FirebaseConfig";
import CardWidget from "../../components/CardWidget/CardWidget";
import BasicMenu from '../../components/Dashboard/Dashboard'



const Generos = () => {
    const [pelicula, setPelicula] = useState([]);

    let { genero } = useParams();
    

    useEffect(() => {
      const getPeliculas = async () => {
        const q = query(collection(db, "peliculas"), where("genero", "==", genero));
        const docs = [];
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
          docs.push({ ...doc.data(), id: doc.id });
        });
        setPelicula(docs);
      };
      getPeliculas(genero);
    }, [genero]);
  return (
    <div>
      <div className='menu-tienda'>
        <h2>CATALOGO</h2>
        <BasicMenu />
      </div>
      <div className='container-generos'>
        {pelicula.map((data) => {
          return (
            <Link
                to={`../details/${data.id}`}
                style={{ textDecoration: "none" }}
                key={data.id}
              >
          <CardWidget peliculasData={data} key={data.id} />;
          </Link>)

        })}
      </div>
        
    </div>
    
  )
}

export default Generos