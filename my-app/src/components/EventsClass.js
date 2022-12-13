import React, { Component } from 'react'

export class EventsClass extends Component {
    clickHandler(){
        console.log("Clicked the class component")
    }
  
    render() {
    return (
      <div>
        <button onClick={this.clickHandler}>click me - class component</button>
      </div>
    )
  }
}

export default EventsClass