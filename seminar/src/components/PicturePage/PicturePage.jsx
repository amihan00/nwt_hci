import React, { Component } from "react";
import axios from "axios";
import "./PicturePage.css";
import { Link } from "react-router-dom";

import { loginState } from "./../../login";

import CommentsContainer from "./../CommentsContainer/CommentsContainer";

class PicturePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pictureid: null,
      pictureLink: null,
      userid: null,
      firstName: null,
      secondName: null,
      email: null,
      username: null
    };
  }

  componentDidMount() {
    const {
      pictureid,
      pictureLink,
      userid
    } = this.props.location.state.picture;

    this.setState({
      pictureid: pictureid,
      pictureLink: pictureLink,
      userid: userid
    });

    axios.get(`/getuserbyid/${userid}`).then(response => {
      const user = response.data[0];
      this.setState({
        firstName: user.first_name,
        secondName: user.second_name,
        email: user.email,
        username: user.username
      });
    });
  }

  render() {
    return (
      <span className="picturePageWrapper">
        <div className="pictureContainer">
          <img
            className="pictureBig"
            src={this.state.pictureLink}
            alt={`img ${this.state.pictureid}`}
          />
          <h3 className="userName">{`Picture by: ${this.state.username}`}</h3>
          <h4 className="userEmail">{this.state.email}</h4>
        </div>
        <h2 className="pictureComments">Comments:</h2>
        {!loginState.isLoggedIn ? (
          <Link
            className="commentLogin"
            to={{
              pathname: "/login"
            }}
          >
            <h4>If you want to post a comment, login here</h4>
          </Link>
        ) : (
          <div className="commentPost">
            <textarea
              className="commentBox"
              placeholder={`${loginState.user.username}, type your comment here.`}
            ></textarea>
            <br />
            <button classname="commentButton" name="submit">
              Submit comment
            </button>
          </div>
        )}
        <CommentsContainer pictureid={this.state.pictureid} />
      </span>
    );
  }
}

export default PicturePage;
