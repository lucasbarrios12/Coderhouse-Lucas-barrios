import React, { Component } from "react";
import "./App.css";

//components

import Header from "./components/Header/Header";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";


class App extends Component {
  render() {
    return(
      <div>
        <Header />
        <ItemListContainer greeting="Bienvenidos a My Brand" />
      </div>
    )
  }
}

export default App;
