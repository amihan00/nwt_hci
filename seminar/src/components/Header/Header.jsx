import React, { Component } from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import { Dropdown } from "semantic-ui-react";

import { loginState, logout } from "./../../login";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false,
      activeItem: "home",
      width: window.innerWidth
    };

    loginState.loginCallback = log => {
      this.setState({ isLoggedIn: log });
    };
    this.clickMenu = this.clickMenu.bind(this);
  }

  showNotLoggedInTab = () => {
    return (
      <ul className="logRegWrapper">
        <li
          id="register"
          className={`registerLink headerElement ${this.getClassName(
            "register"
          )}`}
          onClick={this.clickMenu.bind(this, "register")}
        >
          <Link className="logReg" to="/register">
            <h4>REGISTER</h4>
          </Link>
        </li>
        <li
          id="login"
          className={`loginLink headerElement ${this.getClassName("login")}`}
          onClick={this.clickMenu.bind(this, "login")}
        >
          <Link
            className="logReg"
            to={{
              pathname: "/login"
            }}
          >
            <h4>LOGIN</h4>
          </Link>
        </li>
      </ul>
    );
  };

  handleLogout = () => {
    logout();
    loginState.loginCallback(false);
  };

  showLoggedInTab = () => {
    return (
      <ul className="logRegWrapper">
        <li>
          <Link
            to={{
              pathname: "/user",
              state: {
                user: loginState.user
              }
            }}
          >
            <h4 className="welcomeText">{`Welcome, ${loginState.user.username}`}</h4>
          </Link>
        </li>
        <li className={`logout headerElement`}>
          <button className="logoutButton" onClick={this.handleLogout}>
            <h4>LOGOUT</h4>
          </button>
        </li>
      </ul>
    );
  };

  isLoggedIn = () => {
    return !loginState.isLoggedIn
      ? this.showNotLoggedInTab()
      : this.showLoggedInTab();
  };

  clickMenu(id) {
    this.setState({
      activeItem: id
    });
  }

  getClassName = id => {
    if (id === this.state.activeItem) return "active";
  };

  updateDimensions = () => {
    this.setState({ width: window.innerWidth });
  };
  componentWillMount() {
    this.updateDimensions();
  }
  componentDidMount() {
    window.addEventListener("resize", this.updateDimensions);
  }
  componentWillUnmount() {
    window.removeEventListener("resize", this.updateDimensions);
  }

  dropdown = () => {
    return (
      <Dropdown text="MENU">
        <Dropdown.Menu>
          <Dropdown.Item>
            <Link
              id="home"
              className={`homeLink headerElement ${this.getClassName("home")}`}
              to="/"
              onClick={this.clickMenu.bind(this, "home")}
            >
              <h4>HOME</h4>
            </Link>
          </Dropdown.Item>
          <Dropdown.Item>
            <Link
              id="blog"
              className={`blogLink headerElement ${this.getClassName("blog")}`}
              to="/blog"
              onClick={this.clickMenu.bind(this, "blog")}
            >
              <h4>BLOG</h4>
            </Link>
          </Dropdown.Item>
          <Dropdown.Item>
            <Link
              id="about"
              className={`aboutLink headerElement ${this.getClassName(
                "about"
              )}`}
              to="/about"
              onClick={this.clickMenu.bind(this, "about")}
            >
              <h4>ABOUT</h4>
            </Link>
          </Dropdown.Item>
          <Dropdown.Item>
            <Link
              id="contact"
              className={`contactLink headerElement ${this.getClassName(
                "contact"
              )}`}
              to="/contact"
              onClick={this.clickMenu.bind(this, "contact")}
            >
              <h4>CONTACT</h4>
            </Link>
          </Dropdown.Item>
          <Dropdown.Item>{this.isLoggedIn()}</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    );
  };

  render() {
    return (
      <header className="header">
        <h1 className="pageTitle">Shoot me!</h1>
        {this.state.width > 600 ? (
          <div className="nav">
            <Link
              id="home"
              className={`homeLink headerElement ${this.getClassName("home")}`}
              to="/"
              onClick={this.clickMenu.bind(this, "home")}
            >
              <h3>HOME</h3>
            </Link>
            <Link
              id="blog"
              className={`blogLink headerElement ${this.getClassName("blog")}`}
              to="/blog"
              onClick={this.clickMenu.bind(this, "blog")}
            >
              <h3>BLOG</h3>
            </Link>
            <Link
              id="about"
              className={`aboutLink headerElement ${this.getClassName(
                "about"
              )}`}
              to="/about"
              onClick={this.clickMenu.bind(this, "about")}
            >
              <h3>ABOUT</h3>
            </Link>
            <Link
              id="contact"
              className={`contactLink headerElement ${this.getClassName(
                "contact"
              )}`}
              to="/contact"
              onClick={this.clickMenu.bind(this, "contact")}
            >
              <h3>CONTACT</h3>
            </Link>
            {this.isLoggedIn()}
          </div>
        ) : (
          this.dropdown()
        )}
      </header>
    );
  }
}

export default Header;
