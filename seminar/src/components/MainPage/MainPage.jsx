import React, { Component } from "react";
import axios from "axios";
import "./MainPage.scss";
import { Link } from "react-router-dom";

import Picture from "./../Picture/Picture";
import { loginState } from "./../../login";

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
        picturesSorted: sortedPictures
      });
    }
  };

  displayAddPicture = () => {
    if (loginState.isLoggedIn) {
      return (
        <div className="addPictureBar">
          <button
            className="addPicture"
            onClick={<Link to="/addnewpicture"></Link>}
          >
            {loginState.user.username}, click here to add a new picture!
          </button>
        </div>
      );
    }
  };

  render() {
    const { pictureTag, pictures, picturesSorted } = this.state;
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
        {this.displayAddPicture()}
        <div id="wrapper" className="pictureContainer">
          {Array.prototype.map.call(
            pictureTag ? picturesSorted : pictures,
            (picture, idx) => (
              <div id="pict" key={idx}>
                <Picture picture={picture} />
              </div>
            )
          )}
        </div>
      </div>
    );
  }
}

export default MainPage;
