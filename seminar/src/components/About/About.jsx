import React, { Component } from "react";
import "./About.css";

class About extends Component {
  state = {};
  render() {
    return (
      <div classname="aboutWrapper">
        <h2 className="about">About us</h2>
        <hr></hr>
        <p className="aboutParagraph">Hello and welcome to our page!</p>
      </div>
    );
  }
}

export default About;
