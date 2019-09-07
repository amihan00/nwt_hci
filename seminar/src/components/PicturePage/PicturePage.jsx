import React, { Component } from "react";
import axios from "axios";

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
      <div className="picturePageWrapper">
        <div className="pictureContainer">
          <img
            className="picture"
            src={this.state.pictureLink}
            alt={`img ${this.state.pictureid}`}
          />
          <h4 className="userInfo">{`Picture by: ${this.state.username} ${this.state.email}`}</h4>
        </div>
        <CommentsContainer pictureid={this.state.pictureid} />
      </div>
    );
  }
}

export default PicturePage;
