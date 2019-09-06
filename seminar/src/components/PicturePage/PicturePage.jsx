import React, { Component } from "react";

class PicturePage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return <div>{`Picture Page ${this.props.pictureid}`}</div>;
  }
}

export default PicturePage;
