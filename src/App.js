
import React, { Component } from 'react';
import Header from "./components/header";
import Dish, { Flag} from "./components/dish";

import './styles/App.css';
  


class App extends Component {
  dish = "tacos";


  render() {
    return (
      <div className="App">
        <Header />
        <Dish />
        Yo como {this.dish}
      </div>
    );
  }
}

export default App;



