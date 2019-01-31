import React, { Component, Fragment } from "react";
import { css, keyframes } from "emotion";

export class Header extends Component {
  render() {
    const headerStyle = css`
      display: flex;
      justify-content: flex-end;
    `;

    return (
      <div className={headerStyle}>
        <div>Hi {this.props.name}</div>
        <button>Logout</button>
      </div>
    );
  }
}

export default class App extends Component {
  state = {
    user: {
      name: "Rob",
      wishlist: ["Bike", "Action Man"]
    }
  };

  render() {
    return (
      <Fragment>
        <Header name={this.state.user.name} />
        <div>Wishlist: {this.state.user.wishlist[0]} </div>
      </Fragment>
    );
  }
}
