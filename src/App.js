import React, { Component } from "react";
import "./App.css";
import "./components/navbar/Navbar";
import Navigation from "./components/navbar/Navbar";

class App extends Component {
  render() {
    return (
      <div>
        <Navigation />
      </div>
    );
  }
}

export default App;
