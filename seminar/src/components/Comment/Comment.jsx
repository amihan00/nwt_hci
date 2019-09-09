import React, { Component } from "react";
import axios from "axios";
import "./Comment.css";

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
        <div className="commmentBox">
          <div className="commentInfo commentElement">
            <p className="c commenter">
              <b>{this.state.user.username}</b> says:
            </p>
            <p className="c commentTime">{comment.comment_time}</p>
            <p className="commentElement commentText">{comment.comment_text}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Comment;
