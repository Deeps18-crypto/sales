import React, { Component } from "react";
import Course from "./Course";
import "./Course.css";

class Courses extends Component {
  state = {
    total: 0,
  };

  sumprice = (price) => {
    this.setState({ total: this.state.total + price });
  };
  render() {
    var courses = this.props.items.map((item, i) => {
      return (
        <Course
          name={item.name}
          price={item.price}
          active={item.active}
          sumprice={this.sumprice}
          key={i}
        />
      );
    });
    return (
      <div>
        <h3>{courses}</h3>
        <div className="Courses">
          <p>
            Total :<b>{this.state.total}</b>
          </p>
        </div>
      </div>
    );
  }
}

export default Courses;
