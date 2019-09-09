import React, { Component } from "react";
import axios from "axios";
import "./UserPage.css";
import { Link } from "react-router-dom";

import { loginState, logout } from "./../../login";

class UserPage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  deleteUser = () => {
    const { user } = this.props.location.state;

    axios
      .delete(`/deleteuser/${user.userid}`)
      .then(response => {
        console.log(response);
        logout();
        loginState.loginCallback(true);
        this.props.history.push("/");
      })
      .catch(error => console.log(error));
  };

  render() {
    const { user } = this.props.location.state;
    console.log(this);
    return (
      <div className="userInfo">
        <h3>{`Hello, ${user.username}!`}</h3>
        <div className="firstName">
          <h4 className="userLabel">First name: </h4>
          <h5 className="userText">{user.first_name}</h5>
        </div>
        <div className="secondName">
          <h4 className="userLabel">Second name: </h4>
          <h5 className="userText">{user.second_name}</h5>
        </div>
        <div className="email">
          <h4 className="userLabel">Email: </h4>
          <h5 className="userText">{user.email}</h5>
        </div>
        <div className="firstName">
          <h4 className="userLabel">Username: </h4>
          <h5 className="userText">{user.username}</h5>
        </div>
        <button className="createAccount updateUser" onClick={this.updateUser}>
          <Link
            className="updateUserLink"
            to={{
              pathname: "/updateuser",
              state: {
                userid: user.userid
              }
            }}
          >
            Update User
          </Link>
        </button>
        <button className="createAccount" onClick={this.deleteUser}>
          Delete User
        </button>
      </div>
    );
  }
}

export default UserPage;
