import React, { Component } from "react";
import axios from "axios";
import "./MainPage.scss";
import { Link } from "react-router-dom";

import { loginState } from "./../../login";

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
        picturesSorted: sortedPictures
      });
    }
  };

  displayAddPicture = () => {
    if (loginState.isLoggedIn) {
      return (
        <Link to="/addnewpicture">
          <button className="addPicture" type="button">
            <h5>
              {loginState.user.username}, click here to add a new picture!
            </h5>
          </button>
        </Link>
      );
    }
  };

  render() {
    const { pictureTag, pictures, picturesSorted } = this.state;
    return (
      <div className="mainWrapper">
        {this.displayAddPicture()}
        <div className="searchbar">
          <input
            id="search"
            className="search"
            type="text"
            placeholder="Search by tag..."
            onKeyPress={this.handleInputClick}
          />
        </div>
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
