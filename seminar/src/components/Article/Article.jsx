import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./Article.css";

import image from "./../../images/york.png";

const MAX_LENGTH = 300;

class Article extends Component {
  constructor(props) {
    super(props);
    this.state = {
      article: null
    };
  }

  UNSAFE_componentWillReceiveProps() {
    const { articleid } = this.props;
    axios.get(`/getarticlebyid/${articleid}`).then(response => {
      this.setState({ article: response.data });
      console.log(this.state);
    });
  }

  render() {
    return (
      <div className="articleWrapper">
        <hr />
        <h2 className="articleTitle">{this.props.article.article_title}</h2>
        <div className="articleBox">
          <img className="articleImage" src={image} alt="articleImage" />
          <p className="articleTextSmall">
            {`${this.props.article.article_text.substring(
              0,
              MAX_LENGTH
            )}...   `}
            <Link
              className="articleLink"
              to={{
                pathname: `/blog/${this.props.article.articleid}`,
                state: {
                  article: this.props.article
                }
              }}
            >
              Read more...
            </Link>
          </p>
        </div>
      </div>
    );
  }
}

export default Article;
