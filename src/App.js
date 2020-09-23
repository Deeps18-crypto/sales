import React, { Component } from "react";

import "./App.css";
import Courses from "./Courses";

class App extends Component {
  render() {
    var courser = [
      {
        name: "Complete iOS10 dev course",
        price: 189,
      },
      {
        name: "Complete pentesting course",
        price: 232,
      },
      {
        name: "Complete webapp course",
        price: 543,
      },
    ];
    return (
      <div className="App">
        <Courses items={courser} />
      </div>
    );
  }
}

export default App;
