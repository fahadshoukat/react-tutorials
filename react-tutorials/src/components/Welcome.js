import React, { Component } from "react";

class Welcome extends Component {
  render() {
    const {name, heroname} = this.props
    return (
      <div>
        <h2>
          Hello {name} a.k.a {heroname}
        </h2>
        {this.props.children}
      </div>
    );
  }
}

export default Welcome;
