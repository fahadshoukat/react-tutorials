import React, { Component } from 'react'

class Form extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         userName: '',
         comments: '',
         topic: 'react'
      }
    }

    handleUserNameChange = e => this.setState({userName: e.target.value});

    handleCommentsChange = e => this.setState({comments: e.target.value});

    handleTopicChange = e => this.setState({topic: e.target.value});

    handleSubmit = e => {
        alert(`${this.state.userName} ${this.state.comments} ${this.state.topic}`)
        e.preventDefault();
    }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
          <div>
              <label>UserName</label>
              <input type="text" value={this.state.userName} onChange={this.handleUserNameChange} />
          </div>
          <div>
              <label>comments</label>
              <textarea value={this.state.comments} onChange={this.handleCommentsChange} />
          </div>
          <div>
              <label>Topic</label>
              <select value={this.state.topic} onChange={this.handleTopicChange} >
                  <option value="React">React</option>
                  <option value="Angular">Angular</option>
                  <option value="Veu">Veu</option>
              </select>
          </div>
          <button type='submit'>Submit</button>
      </form>
    )
  }
}

export default Form