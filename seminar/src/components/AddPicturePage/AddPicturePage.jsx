import React, { Component } from "react";
import axios from "axios";

import { loginState } from "./../../login";

const formValid = ({ formErrors, ...rest }) => {
  let valid = true;

  Object.values(formErrors).forEach(val => {
    val.length > 0 && (valid = false);
  });

  Object.values(rest).forEach(val => {
    val === "" && (valid = false);
  });

  return valid;
};

class AddPicturePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pictureLink: "",
      primaryTag: "",
      secondaryTag: "",
      formErrors: {
        pictureLink: "",
        primaryTag: "",
        secondaryTag: ""
      }
    };
  }

  handleSubmit = e => {
    e.preventDefault();

    if (formValid(this.state)) {
      console.log(`
      --SUBMITTING PICTURE FOR UPLOAD--
      Link:          ${this.state.pictureLink}
      Primary Tag:   ${this.state.primaryTag}
      Secondary Tag: ${this.state.secondaryTag}
      `);
    } else {
      console.error("FORM INVALID - DISPLAY ERROR MESSAGE");
    }

    axios
      .post(`/createpicture/${loginState.user.userid}`, {
        picture_link: this.state.pictureLink,
        primary_tag: this.state.primaryTag,
        secondary_tag: this.state.secondaryTag
      })
      .then(response => {
        window.alert("New picture added");
        loginState.loginCallback(true);
        this.props.history.push("/");
      })
      .catch(error => console.log(error));
  };

  handleChange = e => {
    e.preventDefault();

    const { name, value } = e.target;
    let formErrors = this.state.formErrors;

    switch (name) {
      case "pictureLink":
        formErrors.pictureLink =
          value.length < 3 ? "minimum 3 characters required" : "";
        break;
      case "primaryTag":
        formErrors.primaryTag =
          value.length < 3 ? "minimum 3 characters required" : "";
        break;
      case "secondaryTag":
        formErrors.secondaryTag =
          value.length < 3 ? "minimum 3 characters required" : "";
        break;
      default:
        break;
    }

    this.setState({ formErrors, [name]: value });
  };

  render() {
    const { formErrors } = this.state;
    return (
      <div className="wrapper">
        <div className="form-wrapper">
          <h1>Add new picture</h1>
          <form onSubmit={this.handleSubmit} noValidate>
            <div className="pictureLink">
              <label className="label" htmlFor="pictureLink">
                Picture link:
              </label>

              <div className="inputContainer">
                <input
                  type="text"
                  className={formErrors.pictureLink.length > 0 ? "error" : null}
                  placeholder="picture link"
                  name="pictureLink"
                  noValidate
                  onChange={this.handleChange}
                />
                {formErrors.pictureLink.length > 0 && (
                  <span className="errorMessage">{formErrors.pictureLink}</span>
                )}
              </div>
            </div>
            <div className="primaryTag">
              <label className="label" htmlFor="primaryTag">
                Primary tag:
              </label>

              <div className="inputContainer">
                <input
                  type="primaryTag"
                  className={formErrors.primaryTag.length > 0 ? "error" : null}
                  placeholder="primary tag"
                  name="primaryTag"
                  noValidate
                  onChange={this.handleChange}
                />
                {formErrors.primaryTag.length > 0 && (
                  <span className="errorMessage">{formErrors.primaryTag}</span>
                )}
              </div>
            </div>
            <div className="secondaryTag">
              <label className="label" htmlFor="secondaryTag">
                Secondary tag (optional):
              </label>

              <div className="inputContainer">
                <input
                  type="secondaryTag"
                  className={
                    formErrors.secondaryTag.length > 0 ? "error" : null
                  }
                  placeholder="secondary tag"
                  name="secondaryTag"
                  noValidate
                  onChange={this.handleChange}
                />
                {formErrors.secondaryTag.length > 0 && (
                  <span className="errorMessage">
                    {formErrors.secondaryTag}
                  </span>
                )}
              </div>
            </div>
            <div>
              <button className="createAccount" type="submit">
                Add picture
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default AddPicturePage;
