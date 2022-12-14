import React, { Component } from "react";
import LifeCyclesCDUChild from "./LifeCyclesCDUChild";

export class LifeCyclesCDU extends Component {
  constructor(props) {
    console.log("Constructor");
    super(props);

    this.state = {
      greeting: "Hello",
    };
  }

  updateGreeting = () => {
    console.log("updateGreeting");
    this.setState((prevState) => {
      return {
        greeting: this.state.greeting === "Hello" ? "Goodbye" : "Hello",
      };
    });
  };

  componentDidUpdate() {
    console.log("Updated");
  }

  render() {
    console.log("Render method");
    return (
      <div>
        <h1>{this.state.greeting}</h1>
        <button onClick={this.updateGreeting}>Update greeting</button>
        <LifeCyclesCDUChild parentGreeting={this.state.greeting}/>
      </div>
    );
  }
}

export default LifeCyclesCDU;
