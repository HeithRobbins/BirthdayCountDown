import React, { Component } from "react";

import BirthdayForm from "./birthdayForm";

export default class App extends Component {
  render() {
    return (
      <div>
        <header>
          <div className="header_skew">
            <div className="header_subskew">
              <h1>Birthday Countdown</h1>
            </div>
          </div>
        </header>
        <BirthdayForm />
      </div>
    );
  }
}
