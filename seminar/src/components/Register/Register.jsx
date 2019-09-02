import React, { Component } from "react";
import Axios from "axios";

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    Axios.get("/users").then(response => console.log(response.data));
  }

  render() {
    return <h2>Register</h2>;
  }
}

export default Register;
