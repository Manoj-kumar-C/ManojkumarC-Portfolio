import React, { Component } from "react";

export default class DesignImg extends Component {
  render() {
    const theme = this.props.theme;
    return <img src={require("../../assests/home/uiux.png")} />;
  }
}
