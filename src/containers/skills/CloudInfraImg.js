import React, { Component } from "react";

export default class CloudInfraImg extends Component {
  render() {
    const theme = this.props.theme;
    return <img src={require("../../assests/home/FullStackDev.png")} />;
  }
}
