import React, { Component } from "react";
import axios from "axios";

import Picture from "./../Picture/Picture";

class MainPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pictures: {
        pictureid: [],
        pictureLink: []
      }
    };
  }

  componentDidMount() {
    axios
      .get("/pictures")
      .then(response => {
        this.setState({
          pictures: response.data.map((picture, idx) => picture)
        });
      })
      .catch(error => console.log(error));
  }

  render() {
    const { pictures } = this.state;
    return (
      <React.Fragment>
        {Array.prototype.forEach.call(pictures, picture => (
          <Picture picture={picture} />
        ))}
      </React.Fragment>
    );
  }
}

export default MainPage;
