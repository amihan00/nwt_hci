import React, { Component } from "react";
import "./Header.css";
import SearchField from "react-search-field";
import { BrowserRouter as Router, Link } from "react-router-dom";

class Header extends Component {
  render() {
    return (
      <div className="Header">
        <h1 className="title">Shoot me!</h1>
        <SearchField placeholder="Search..." classNames="test-class" />
        <Router>
          <ul>
            <li>
              <Link to="/register">Register</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
          </ul>
        </Router>
      </div>
    );
  }
}

export default Header;
