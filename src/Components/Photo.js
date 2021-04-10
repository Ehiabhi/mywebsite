import React, { Component } from "react";

export default class Photo extends Component {
  render() {
    return <img id="passport" src={this.props.location} alt={this.props.alt} width={this.props.width} height={this.props.height} />;
  }
}
