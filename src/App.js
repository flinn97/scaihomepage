import { Component } from "react";
import "./App.css";
import CardSwitcher from "./cardSwitcher";
import scai from "./images/logo.svg";
import SignUpButton from "./signUpButton";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="main-app">
        <div className="main-top-logo">
          <img src={scai} />
          SalesCapture AI works for your sales team
        </div>
        <CardSwitcher app={this.state} />
        <SignUpButton app={this.state} />
      </div>
    );
  }
}
