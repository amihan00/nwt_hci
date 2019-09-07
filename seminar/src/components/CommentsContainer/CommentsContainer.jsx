import React, { Component } from "react";
import axios from "axios";

class ComentsContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    console.log(this);
    console.log(this.props);
    /* axios.get(`/getpicturecomments/${pictureid}`).then(response => {
      console.log(response);
    }); */
  }

  render() {
    return <div>Comments Container</div>;
  }
}

export default ComentsContainer;
