import TextField from "@mui/material/TextField";

import { collection, addDoc } from "firebase/firestore";
import { db } from '../../components/Firebase/FirebaseConfig';
import { useState } from "react";


const initialState = {
  Nombre: "",
  Apeliido: "",
  Mensaje: "",
};

const Contacto = () => {
  const [values, setValues] = useState(initialState);
  const [ setMensajeID] = useState("");

  const onChange = (e) => {
    const { value, name } = e.target;
    setValues({ ...values, [name]: value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const docRef = await addDoc(collection(db, "mensajes"), {
      values,
    });
    console.log("Document written with ID: ", docRef.id);
    setMensajeID(docRef.id);
    setValues(initialState);
  };

  return (
    <div>
      <h1 className="compra-titulo">Contactanos</h1>
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
          placeholder="Mensaje"
          style={{ margin: 10, width: 400 }}
          name="Mensaje"
          value={values.Mensaje}
          onChange={onChange}
        />
        <button className="form-button" type="submit">
          ENVIAR
        </button>
      </form>
    </div>
  );
};

export default Contacto