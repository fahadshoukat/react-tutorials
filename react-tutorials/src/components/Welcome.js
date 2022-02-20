import React, { Component } from "react";

class Welcome extends Component {
  render() {
    return (
      <div>
        <h2>
          Hello {this.props.name} a.k.a {this.props.heroname}
        </h2>
        {this.props.children}
      </div>
    );
  }
}

export default Welcome;
