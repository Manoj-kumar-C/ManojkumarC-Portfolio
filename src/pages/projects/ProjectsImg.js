import React, { Component } from "react";

export default class ProjectsImg extends Component {
  render() {
    const theme = this.props.theme;
    return <img src={require(`../../assests/others/projects.png`)} />;
  }
}
