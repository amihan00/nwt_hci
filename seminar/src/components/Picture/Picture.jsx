import React, { Component } from "react";

class Picture extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { pictureLink } = this.props;
    console.log(this.props);
    return <div>{pictureLink}</div>;
  }
}

export default Picture;
