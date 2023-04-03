import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
//components

import Header from "./components/Header/Header";

//Pages
import Inicio from "./Pages/Inicio";
import Tienda from "./Pages/Tienda";
import Recomendaciones from "./Pages/Recomendaciones";


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
          </Routes>
        </div>
      </Router>
      
    )
  }
}

export default App;
