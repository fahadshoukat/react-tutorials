import React, { Component } from 'react'
import ChildComponent from './ChildComponent'

class ParentComponent extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         parentName: 'parent'
      }

      this.helloParent = this.helloParent.bind(this)
    }

    helloParent(childName){
        alert(`Hello ${this.state.parentName} from ${childName}`)
    }

  render() {
    return (
      <div>
          <ChildComponent greetHandler={this.helloParent} />
      </div>
    )
  }
}

export default ParentComponent