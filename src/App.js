
import React, { Component } from 'react';
import Header from "./components/header";
import Dish, { Flag} from "./components/dish";

import './styles/App.css';
  


class App extends Component {
  dish = "tacos";
  dishes = ["tacos", "burritos", "enchiladas", "quesadillas", "tortillas"];
  render() {
    return (
      <div className="App">
        <Header />
        <Dish name= { this.dish } qty="3"/>
        Yo como {this.dish}
        <ul>
          { 
            this.dishes.map(dish => <li>{ dish }</li>)
          }  
        </ul>
      </div>
    );
  }
}

export default App;



