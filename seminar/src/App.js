import React, { Component } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  Redirect
} from "react-router-dom";

//Pages
import MainPage from "./components/MainPage/MainPage";
import NotFoundPage from "./components/404/404";
import BlogPage from "./components/Blog/Blog";
import Picture from "./components/Picture/Picture";
import Register from "./components/Register/Register";
import Login from "./components/Login/Login";

class App extends Component {
  state = {
    data: null
  };

  componentDidMount() {
    // Call our fetch function below once the component mounts
    this.callBackendAPI()
      .then(res => this.setState({ data: res.express }))
      .catch(err => console.log(err));
  }
  // Fetches our GET route from the Express server. (Note the route we are fetching matches the GET route from server.js
  callBackendAPI = async () => {
    const response = await fetch("/express_backend");
    const body = await response.json();

    if (response.status !== 200) {
      throw Error(body.message);
    }
    return body;
  };

  render() {
    return (
      <div>
        <Router>
          <Header />
          <Switch>
            <Route exact path="/" component={MainPage} />
            <Route path="/blog" component={BlogPage} />
            <Route path="/picture" component={Picture} />
            <Route path="/register" component={Register} />
            <Route path="/login" component={Login} />
            <Route path="/404" component={NotFoundPage} />
            <Redirect to="/404" />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
