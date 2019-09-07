import React, { Component } from "react";
import axios from "axios";

import Comment from "./../Comment/Comment";

class ComentsContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pictureid: null,
      comments: []
    };
  }

  UNSAFE_componentWillReceiveProps() {
    const { pictureid } = this.props;
    if (pictureid) {
      axios
        .get(`/getpicturecomments/${pictureid}`)
        .then(response => {
          this.setState({
            comments: response.data
          });
        })
        .catch(error => console.log(error));
    }
  }

  render() {
    return (
      <div className="commentsContainer">
        {this.state.comments.map((comment, idx) => {
          return <Comment key={idx} comment={comment} />;
        })}
      </div>
    );
  }
}

export default ComentsContainer;
