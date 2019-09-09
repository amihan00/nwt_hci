import React, { Component } from "react";

class Contact extends Component {
  state = {};
  render() {
    return (
      <div classname="aboutWrapper">
        <h2 className="about">You can contact us over:</h2>
        <hr></hr>
        <ul>
          <li className="contactLi">Mail: shoot.me@gmail.com</li>
          <li className="contactLi">Facebook: </li>
          <li className="contactLi">Instagram: </li>
        </ul>
      </div>
    );
  }
}

export default Contact;
