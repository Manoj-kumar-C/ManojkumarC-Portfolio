import React, { Component } from "react";

export default class ExperienceImg extends Component {
  render() {
    const theme = this.props.theme;
    return <img src={require(`../../assests/others/experience.png`)} />;
  }
}
