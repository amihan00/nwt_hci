import React, { Component } from "react";
import "./ArticlePage.css";

import image from "./../../images/york.png";

class ArticlePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      article: [],
      pictureLink: null
    };
  }

  componentDidMount() {
    this.setState({ article: this.props.location.state.article });
  }

  render() {
    const { article_text, article_title } = this.state.article;
    console.log(this.state);
    return (
      <div className="articleWrapper">
        <h2 className="articleTitle">{article_title}</h2>
        <span className="articleContent">
          <div className="img">
            <img src={image} alt="articleImage" className="articleImageBig" />
          </div>
          <p className="articleText">{article_text}</p>
        </span>
      </div>
    );
  }
}

export default ArticlePage;
