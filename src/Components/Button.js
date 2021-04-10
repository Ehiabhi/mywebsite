import React, { Component } from "react";

export default class Button extends Component {
  render() {
    return (
      <a className="projectNav" href={this.props.location}>
        {this.props.quote}
      </a>
    );
  }
}
