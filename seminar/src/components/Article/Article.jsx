import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

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
      <div className="articlesWrapper">
        <h2 className="articleTitle">{this.props.article.article_title}</h2>
        <p className="articleTextSmall">{this.props.article.article_text}</p>
        <Link
          to={{
            pathname: `/blog/${this.props.article.articleid}`,
            state: {
              article: this.props.article
            }
          }}
        >
          Read more...
        </Link>
      </div>
    );
  }
}

export default Article;
