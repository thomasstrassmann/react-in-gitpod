import React, { Component } from 'react'

export class ControlledForm extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
        name: "",
      }
    }

    handleNameChange = (event) => {
      this.setState({
        name: event.target.value,
      })
    }

  render() {
    return (
      <div>
        <form>
          <label htmlFor='id-name'>Your name:</label>
          <input type="text" name="name" id="id-name" value={this.state.name} onChange={this.handleNameChange}></input>
          <input type="submit" value="Submit"></input>
        </form>
      </div>
    )
  }
}

export default ControlledForm