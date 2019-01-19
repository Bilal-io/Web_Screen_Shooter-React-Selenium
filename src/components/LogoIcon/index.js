import React, { Component } from "react";

import Img from "./Img";
import Logo from "./Logo.svg";

class LogoIcon extends Component {
  render() {
    return <Img src={Logo} alt="Screen Shooter Logo" />;
  }
}

export default LogoIcon;
