import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
// FIRBASE - FIRESTORE
import {
  collection,
  query,
  getDocs,
  where,
  documentId,
} from "firebase/firestore";
import { db } from "../../components/Firebase/FirebaseConfig";

import ItemDetail from "../../components/ItemDetail/ItemDetail"

import "./ItemDetailContainer.css";

const ItemDetailContainer = () => {
  const [pelicula, setPelicula] = useState([]);

  let { id } = useParams();

  useEffect(() => {
    const getPelicula = async () => {
      const q = query(collection(db, "peliculas"), where(documentId(), "==", id));
      const docs = [];
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        docs.push({ ...doc.data(), id: doc.id });
      });
      setPelicula(docs);
    };
    getPelicula();
  }, [id]);

  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <h2 className="titulo-detalle">Detalles de la Pelicula</h2>
      {pelicula.map((data) => {
        return <ItemDetail pelicula={data} key={data.id} />;
      })}
    </div>
  );
};

export default ItemDetailContainer;
