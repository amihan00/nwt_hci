import React, { Component } from "react";
import "./Header.css";
import { Link } from "react-router-dom";

class Header extends Component {
  render() {
    return (
      <header className="header">
        <h1 className="pageTitle headerElement">Shoot me!</h1>
        <Link className="homeLink headerElement active" to="/">
          <h3>HOME</h3>
        </Link>
        <Link className="blogLink headerElement" to="/blog">
          <h3>BLOG</h3>
        </Link>
        <Link className="aboutLink headerElement" to="/about">
          <h3>ABOUT</h3>
        </Link>
        <Link className="contactLink headerElement" to="/contact">
          <h3>CONTACT</h3>
        </Link>
        <ul className="logRegWrapper headerElement">
          <li className="registerLink">
            <Link className="logReg" to="/register">
              <h4>REGISTER</h4>
            </Link>
          </li>
          <li className="loginLink">
            <Link className="logReg" to="/login">
              <h4>LOGIN</h4>
            </Link>
          </li>
        </ul>
      </header>
    );
  }
}

export default Header;
