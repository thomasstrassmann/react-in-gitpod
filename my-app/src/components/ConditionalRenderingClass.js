import React, { Component } from 'react'

export class ConditionalRenderingClass extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         isLoaded: false,
      }
    }

  render() {
    return (
      <h1>{this.state.isLoaded ? "Data loaded..." : "Loading"}</h1>
    )
  }
}

export default ConditionalRenderingClass