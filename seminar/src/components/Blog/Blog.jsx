import React, { Component } from "react";
import axios from "axios";

import Article from "./../Article/Article";

class Blog extends Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: []
    };
  }

  componentDidMount() {
    axios.get("/articles").then(response => {
      this.setState({ articles: response.data });
    });
  }

  render() {
    const { articles } = this.state;
    return (
      <div>
        {articles.map((article, i) => (
          <Article key={i} articleprop={article} />
        ))}
      </div>
    );
  }
}

export default Blog;
