import React, { Component } from "react";
import axios from "axios";
import "./Register.css";

/* const emailRegex = RegExp(
  "/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+(?:.[a-zA-Z0-9-]+)*$/"
); */

const formValid = ({ formErrors, ...rest }) => {
  let valid = true;

  Object.values(formErrors).forEach(val => {
    val.length > 0 && (valid = false);
  });

  Object.values(rest).forEach(val => {
    val === "" && (valid = false);
  });

  return valid;
};

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      secondName: "",
      email: "",
      username: "",
      password: "",
      formErrors: {
        firstName: "",
        secondName: "",
        email: "",
        username: "",
        password: ""
      }
    };
  }

  handleSubmit = e => {
    e.preventDefault();

    if (formValid(this.state)) {
      console.log(`
      --SUBMITTING FOR REGISTRATION--
      First Name: ${this.state.firstName}
      Second Name: ${this.state.secondName}
      Email: ${this.state.email}
      Username: ${this.state.username}
      Password: ${this.state.password}
      `);
    } else {
      console.error("FORM INVALID - DISPLAY ERROR MESSAGE");
    }

    axios
      .post("/createuser", {
        first_name: this.state.firstName,
        second_name: this.state.secondName,
        email: this.state.email,
        username: this.state.username,
        password: this.state.password
      })
      .then(response => {
        console.log(response);
        window.alert(
          "New user created Successfully! Log in with your new credentials."
        );
      })
      .catch(error => console.log(error));
  };

  handleChange = e => {
    e.preventDefault();

    const { name, value } = e.target;
    let formErrors = this.state.formErrors;

    switch (name) {
      case "firstName":
        formErrors.firstName =
          value.length < 3 ? "Minimum 3 characters required!" : "";
        break;
      case "secondName":
        formErrors.secondName =
          value.length < 3 ? "Minimum 3 characters required!" : "";
        break;
      case "email":
        formErrors.email =
          /* emailRegex.test(value) && value.length > 0
            ? ""
            : "invalid email address"; */
          value.length < 3 ? "Minimum 3 characters required!" : "";
        break;
      case "username":
        formErrors.username =
          value.length < 3 ? "Minimum 3 characters required!" : "";
        break;
      case "password":
        formErrors.password =
          value.length < 4 ? "Minimum 4 characters required!" : "";
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
          <h1>Create Account</h1>
          <form onSubmit={this.handleSubmit} noValidate>
            <div className="firstName">
              <label className="label" htmlFor="firstName">
                First Name:
              </label>
              <div className="inputContainer">
                <input
                  type="text"
                  className={`input ${
                    formErrors.firstName.length > 0 ? "error" : null
                  }`}
                  placeholder="First Name"
                  name="firstName"
                  noValidate
                  onChange={this.handleChange}
                />
                {formErrors.firstName.length > 0 && (
                  <span className="errorMessage">{formErrors.firstName}</span>
                )}
              </div>
            </div>
            <div className="secondName">
              <label className="label" htmlFor="secondName">
                Second Name:
              </label>
              <div className="inputContainer">
                <input
                  type="text"
                  className={`input ${
                    formErrors.secondName.length > 0 ? "error" : null
                  }`}
                  placeholder="Second Name"
                  name="secondName"
                  noValidate
                  onChange={this.handleChange}
                />
                {formErrors.secondName.length > 0 && (
                  <span className="errorMessage">{formErrors.secondName}</span>
                )}
              </div>
            </div>
            <div className="email">
              <label className="label" htmlFor="email">
                Email:
              </label>
              <div className="inputContainer">
                <input
                  type="email"
                  className={`input ${
                    formErrors.email.length > 0 ? "error" : null
                  }`}
                  placeholder="Email"
                  name="email"
                  noValidate
                  onChange={this.handleChange}
                />
                {formErrors.email.length > 0 && (
                  <span className="errorMessage">{formErrors.email}</span>
                )}
              </div>
            </div>
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
                  placeholder="Username"
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
                  placeholder="Password"
                  name="password"
                  noValidate
                  onChange={this.handleChange}
                />
                {formErrors.password.length > 0 && (
                  <span className="errorMessage">{formErrors.password}</span>
                )}
              </div>
            </div>
            <div>
              <button className="createAccount" type="submit">
                Create Account
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default Register;
