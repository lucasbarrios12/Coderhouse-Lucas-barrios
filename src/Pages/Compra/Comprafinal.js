
import TextField from "@mui/material/TextField";

import { collection, addDoc } from "firebase/firestore";
import { db } from '../../components/Firebase/FirebaseConfig';
import { useState } from "react";
import Mensaje from "../../components/Mensaje/Mensaje"

import "./Comprafinal.css"


const initialState = {
  Nombre: "",
  Apeliido: "",
  Tarjeta: "",
};

const Comprafinal = () => {
  const [values, setValues] = useState(initialState);
  const [purchaseID, setPurchaseID] = useState("");

  const onChange = (e) => {
    const { value, name } = e.target;
    setValues({ ...values, [name]: value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const docRef = await addDoc(collection(db, "purchases"), {
      values,
    });
    console.log("Document written with ID: ", docRef.id);
    setPurchaseID(docRef.id);
    setValues(initialState);
  };

  return (
    <div>
      <h1 className="compra-titulo">Compra</h1>
      <form className="form" onSubmit={onSubmit}>
        <TextField
          placeholder="Nombre"
          style={{ margin: 10, width: 400 }}
          name="Nombre"
          value={values.name}
          onChange={onChange}
        />
        <TextField
          placeholder="Apellido"
          style={{ margin: 10, width: 400 }}
          name="Apellido"
          value={values.lastName}
          onChange={onChange}
        />
        <TextField
          placeholder="Numero de Tarjeta"
          style={{ margin: 10, width: 400 }}
          name="Tarjeta"
          value={values.Tarjeta}
          onChange={onChange}
        />
        <button className="form-button" type="submit">
          ENVIAR
        </button>
      </form>
      {purchaseID.length ? <Mensaje purchaseID={purchaseID} /> : null}
    </div>
  );
};

export default Comprafinal