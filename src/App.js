// src/App.js
import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

import Travel from "./Travel";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">My travels</h1>
        </header>

    <Travel
            photo = "//images.sudouest.fr/2017/03/31/58de606066a4bdf81d7bc120/widescreen/1000x500/l-ouvrage-de-franchissement-de-la-garonne-a-besoin-de-travaux-d-urgence.jpg?v1"
            country = "France"
            distance = "here"
            destination = "Bordeaux"
            />

     <Travel
            photo = "https://cdn.civitatis.com/alemania/berlin/berlin.jpg"
            country = "Germany"
            distance = "far"
            destination = "Berlin"
                    />
      <Travel
              photo = "https://fr.unesco.org/creative-cities/sites/creative-cities/files/styles/creative_city_940_420/public/sydney_2.jpg?itok=WifGdDtX"
              country = "Australia"
              distance = "far Away"
               destination = "Sydney"
                          />
      </div>
    );
  }
}

export default App;