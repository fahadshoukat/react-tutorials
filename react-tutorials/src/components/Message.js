import React, { Component } from 'react'

export default class extends Component {
    
    constructor(){
    
        super()
    
        this.state ={
            message: 'Welcome Visitor'
        }
    }

    messageChange() {

        this.setState({
            message: 'Thank you for subscribing'
        })
    }

  render() {
    return (
      <div>
          <h1>{this.state.message}</h1>
          <button onClick={() => this.messageChange()}>Subscribe</button>
      </div>
    )
  }
}
