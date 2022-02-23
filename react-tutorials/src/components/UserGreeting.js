import React, { Component } from "react";

class UserGreeting extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoggedIn: false,
    };
  }

  render() {
    // if/else approach

    // if(this.state.isLoggedIn){
    //     return <div>Welcome Fahad</div>
    // }else {
    //     return <div>Welcome Guest</div>
    // }

    // element variable approach

    let message;

    if (this.state.isLoggedIn) {
      return (message = <div>Welcome Fahad</div>);
    } else {
      return (message = <div>Welcome Guest</div>);
    }

    // return (
    //   <div>
    //       <div>Welcome Fahad</div>
    //       <div>Welcome Guest</div>
    //   </div>
    // )
  }
}

export default UserGreeting;
