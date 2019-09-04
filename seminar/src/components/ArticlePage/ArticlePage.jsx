import React, { Component } from "react";

class ArticlePage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.setState({ articleid: this.props.location.state.articleid });
  }

  render() {
    return <h2>Big Article {this.state.articleid}</h2>;
  }
}

export default ArticlePage;
