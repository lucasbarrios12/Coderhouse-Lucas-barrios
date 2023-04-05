import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
//components

import Header from "./components/Header/Header";
import ItemDetailContainer from "./Pages/ItemDetailContainer/ItemDetailContainer"

//Pages
import Inicio from "./Pages/inicio/Inicio";
import Tienda from "./Pages/tienda/Tienda";
import Recomendaciones from "./Pages/recomendaciones/Recomendaciones";


class App extends Component {
  render() {
    return(
      <Router>
        <div>
          <Header />
          <Routes>
            <Route path="/" element={<Inicio />} />
            <Route path="/tienda" element={<Tienda />} />
            <Route path="/recomendaciones" element={<Recomendaciones />} />
            <Route path="/detail/:id" element={<ItemDetailContainer />} />
          </Routes>
        </div>
      </Router>
      
    )
  }
}

export default App;
