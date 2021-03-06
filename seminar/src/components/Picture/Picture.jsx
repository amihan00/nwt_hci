import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./Picture.scss";

class Picture extends Component {
  constructor(props) {
    super(props);
    this.state = {
      picture: {
        pictureid: null,
        pictureLink: null,
        userid: null
      }
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
          picture: {
            pictureid: pictureid,
            pictureLink: "data:;base64," + base64,
            userid: userid
          }
        });
      })
      .catch(error => console.log(error));
  }

  render() {
    return (
      <div id="gallery">
        <Link
          className="imageLink"
          to={{
            pathname: `/picture/${this.state.picture.pictureid}`,
            state: { picture: this.state.picture }
          }}
        >
          <span className="pictureElement">
            <img
              className="image"
              src={this.props.picture.picture_link}
              alt={`img ${this.props.picture.pictureid}`}
            />
          </span>
        </Link>
      </div>
    );
  }
}

export default Picture;
