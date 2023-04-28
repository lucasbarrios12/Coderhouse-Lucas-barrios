import React, { useState, useEffect } from "react";

import CardWidget from "../CardWidget/CardWidget";
import { Link } from "react-router-dom";

import "./CardList.css";

// FIRBASE - FIRESTORE
import { collection, query, getDocs } from "firebase/firestore";
import { db } from "../Firebase/FirebaseConfig";

const CardList = () => {
  const [peliculas, SetPeliculas] = useState([]);

  useEffect(() => {
    const getPeliculas = async () => {
      const q = query(collection(db, "peliculas"));
      const docs = [];
      const querySnapshot = await getDocs(q);
      // console.log('DATA:', querySnapshot);
      querySnapshot.forEach((doc) => {
        // console.log('DATA:', doc.data(), 'ID:', doc.id);
        docs.push({ ...doc.data(), id: doc.id });
      });
      // console.log(docs);
      SetPeliculas(docs);
    };
    getPeliculas();
  }, []);

  return (
        <div className="CardListContainer">
          {peliculas.map((data) => {
            return (
              <Link
                to={`details/${data.id}`}
                style={{ textDecoration: "none" }}
                key={data.id}
              >
                <CardWidget peliculasData={data} />
              </Link>
            );
          })}
        </div>
      )
}

export default CardList;
