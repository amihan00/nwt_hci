import React, { Component } from "react";
import axios from "axios";
import "./MainPage.css";

import Picture from "./../Picture/Picture";

class MainPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pictureTag: null,
      pictures: {
        pictureid: [],
        pictureLink: [],
        primaryTag: [],
        secondaryTag: []
      },
      picturesSorted: {
        pictureid: [],
        pictureLink: [],
        primaryTag: [],
        secondaryTag: []
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

  handleInputClick = e => {
    let input,
      sortedPictures = [];

    if (e.key === "Enter") {
      input = document.getElementById("search");
      this.state.pictures.forEach(picture => {
        if (
          picture.primary_tag === input.value ||
          picture.secondary_tag === input.value
        ) {
          sortedPictures.push(picture);
        }
      });
      this.setState({
        pictureTag: input.value,
        pictures: sortedPictures
      });
    }
  };

  render() {
    return (
      <div className="mainWrapper">
        <div className="searchbar">
          <input
            id="search"
            className="search"
            type="text"
            placeholder="Search by tag..."
            onKeyPress={this.handleInputClick}
          />
        </div>
        <div className="pictureContainer">
          {Array.prototype.map.call(this.state.pictures, (picture, idx) => (
            <Picture key={idx} picture={picture} />
          ))}
        </div>
      </div>
    );
  }
}

export default MainPage;
