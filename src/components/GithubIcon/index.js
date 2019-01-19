import React, { Component } from "react";

import A from "./A";
import Img from "./Img";
import GithubLogo from "./GithubLogo.svg";

class GithubIcon extends Component {
  render() {
    return (
      <A href="#" target="_blank">
        <Img src={GithubLogo} alt="Screen Shooter Logo" />
      </A>
    );
  }
}

export default GithubIcon;
