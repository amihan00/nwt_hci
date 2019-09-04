import React, { Component } from "react";
import { Link } from "react-router-dom";

class Article extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  /* componentDidMount() {
    const { articleid } = this.props;
    axios.get(`/articles/${articleid}`).then(response => {
      this.setState({ article: response.data });
    });
  } */

  render() {
    return (
      <div>
        <h2>artikl</h2>
        <Link
          to={{
            pathname: `/blog/${this.props.articleprop.articleid}`,
            state: {
              articleid: this.props.articleprop.articleid
            }
          }}
        >
          Link
        </Link>
      </div>
    );
  }
}

export default Article;
