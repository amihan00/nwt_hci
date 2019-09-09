import React, { Component } from "react";
import axios from "axios";
import "./Login.css";

import login, { loginState } from "./../../login";

const formValid = ({ formErrors, ...rest }) => {
  let valid = true;

  if (rest.username === "" || rest.password === "") valid = false;

  Object.values(formErrors).forEach(val => {
    val.length > 0 && (valid = false);
  });

  Object.values(rest).forEach(val => {
    val === "" && (valid = false);
  });

  return valid;
};

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      formErrors: {
        username: "",
        password: ""
      }
    };
  }

  handleSubmit = e => {
    e.preventDefault();
    if (!formValid(this.state)) {
      window.alert("Error logging in");
    } else {
      console.log(`
      --SUBMITTING FOR LOGIN--
      Username: ${this.state.username}
      Password: ${this.state.password}
      `);

      axios
        .post("/login", {
          username: this.state.username,
          password: this.state.password
        })
        .then(response => {
          if (response.data.length !== 0) {
            login(response.data[0], true);
            loginState.loginCallback(true);
            this.props.history.push("/");
          } else {
            window.alert("Wrong username or password, please try again!");
          }
        })
        .catch(error => console.log(error));
    }
  };

  handleChange = e => {
    e.preventDefault();

    const { name, value } = e.target;
    let formErrors = this.state.formErrors;

    switch (name) {
      case "username":
        formErrors.username =
          value.length < 3 || name === null
            ? "minimum 3 characters required"
            : "";
        break;
      case "password":
        formErrors.password =
          value.length < 4 ? "minimum 4 characters required" : "";
        break;
      default:
        break;
    }

    this.setState({ formErrors, [name]: value });
  };

  render() {
    const { formErrors } = this.state;
    return (
      <div className="wrapper">
        <div className="form-wrapper">
          <h1>Log In</h1>
          <form onSubmit={this.handleSubmit} noValidate>
            <div className="username">
              <label className="label" htmlFor="username">
                Username:
              </label>
              <div className="inputContainer">
                <input
                  type="text"
                  className={`input ${
                    formErrors.username.length > 0 ? "error" : null
                  }`}
                  placeholder="username"
                  name="username"
                  noValidate
                  onChange={this.handleChange}
                />
                {formErrors.username.length > 0 && (
                  <span className="errorMessage">{formErrors.username}</span>
                )}
              </div>
            </div>
            <div className="password">
              <label className="label" htmlFor="password">
                Password:
              </label>
              <div className="inputContainer">
                <input
                  type="password"
                  className={`input ${
                    formErrors.password.length > 0 ? "error" : null
                  }`}
                  placeholder="password"
                  name="password"
                  noValidate
                  onChange={this.handleChange}
                />
                {formErrors.username.length > 0 && (
                  <span className="errorMessage">{formErrors.password}</span>
                )}
              </div>
            </div>
            <div className="logIn">
              <button className="createAccount" type="submit">
                Log In
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default Login;
