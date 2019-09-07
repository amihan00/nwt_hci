import React, { Component } from "react";

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
          <p className="articleText">{article_text}</p>
        </span>
      </div>
    );
  }
}

export default ArticlePage;
