import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

import PicturePage from "./../PicturePage/PicturePage";

class Picture extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pictureid: null,
      pictureLink: null,
      userid: null
    };
  }

  componentDidMount() {
    const { pictureid, picture_link, userid } = this.props.picture;
    axios
      .get(picture_link, { responseType: "arraybuffer" })
      .then(response => {
        const base64 = btoa(
          new Uint8Array(response.data).reduce(
            (data, byte) => data + String.fromCharCode(byte),
            ""
          )
        );
        this.setState({
          pictureid: pictureid,
          pictureLink: "data:;base64," + base64,
          userid: userid
        });
      })
      .catch(error => console.log(error));
  }

  render() {
    return (
      <Link
        to={`/picture/${this.state.pictureid}`}
        pictureid={this.state.pictureid}
      >
        <span className="pictureElement">
          <img
            src={this.state.pictureLink}
            alt={`img ${this.props.picture.pictureid}`}
          />
        </span>
      </Link>
    );
  }
}

export default Picture;
