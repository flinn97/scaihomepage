import React, { Component } from "react";

export default class SignUpButton extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleClick = () => {
    window.location.href = "https://salescaptureai.web.app";
  };

  render() {
    return (
      <div className="sign-up-button">
        <div className="button-int" onClick={this.handleClick}>
          Sign Up
        </div>
      </div>
    );
  }
}
