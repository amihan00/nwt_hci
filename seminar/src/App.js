import React, { Component } from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

//Pages
import MainPage from "./components/MainPage/MainPage";
import BlogPage from "./components/Blog/Blog";
import ArticlePage from "./components/ArticlePage/ArticlePage";
import AboutPage from "./components/About/About";
import ContactPage from "./components/Contact/Contact";
import PicturePage from "./components/PicturePage/PicturePage";
import Register from "./components/Register/Register";
import Login from "./components/Login/Login";
import NotFoundPage from "./components/404/404";

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
            <Route exact path="/blog" component={BlogPage} />
            <Route exact path="/blog/:articleid" component={ArticlePage} />
            <Route path="/about" component={AboutPage} />
            <Route path="/contact" component={ContactPage} />
            <Route path="/picture/:pictureid" component={PicturePage} />
            <Route path="/register" component={Register} />
            <Route path="/login" component={Login} />
            <Route path="/404" component={NotFoundPage} />
            <Redirect to="/404" />
          </Switch>
          <Footer />
        </Router>
      </div>
    );
  }
}

export default App;
