import React, { Component } from "react";
import "./Course.css";

class Course extends Component {
  state = {
    active: false,
  };
  additems = () => {
    var active = !this.state.active;
    this.setState({ active: active });
    this.props.sumprice(active ? this.props.price : -this.props.price);
  };
  render() {
    return (
      <div className="Course">
        <p
          className={this.state.active ? "active" : ""}
          onClick={this.additems}
        >
          {this.props.name}
        </p>
        <strong>{this.props.price}</strong>
      </div>
    );
  }
}
export default Course;
