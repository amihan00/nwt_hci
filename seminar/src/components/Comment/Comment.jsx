import React, { Component } from "react";
import axios from "axios";

class Comment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: []
    };
  }

  componentDidMount() {
    const { userid } = this.props.comment;

    axios
      .get(`/getuserbyid/${userid}`)
      .then(response => {
        this.setState({
          user: response.data[0]
        });
      })
      .catch(error => console.log(error));
  }

  render() {
    const { comment } = this.props;
    return (
      <div className="commentWrapper">
        <hr className="commentDivisor" />
        <p className="commentText">{comment.comment_text}</p>
        <p className="commentTime">{comment.comment_time}</p>
        <p className="commenter">{this.state.user.username}</p>
      </div>
    );
  }
}

export default Comment;
