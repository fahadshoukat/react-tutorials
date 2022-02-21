import React, { Component } from 'react'

class EventBind extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         text: 'Hello'
      }

    //   this.clickHandler = this.clickHandler.bind(this)
    }

    // clickHandler(){
    //     this.setState({
    //         text: 'Goodbye!'
    //     })
    // }

    clickHandler = () => {
        this.setState({
            text: 'Goodbye!'
        })
    }

  render() {
    return (
      <div>
          <h3>{this.state.text}</h3>
          {/* <button onClick={this.clickHandler.bind(this)}>Click</button> */}
          {/* <button onClick={() => this.clickHandler()}>Click</button> */}
          <button onClick={this.clickHandler}>Click</button>
      </div>
    )
  }
}

export default EventBind