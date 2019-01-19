import React, { Component } from "react";

import H2 from "./H2";
import NavBar from "./NavBar";
import Grow from "../Grow";
import LogoIcon from "../LogoIcon";
import GithubIcon from "../GithubIcon";

class Header extends Component {
  render() {
    return (
      <NavBar>
        <LogoIcon />
        <H2>Web Screen Shooter</H2>
        <Grow />
        <GithubIcon />
      </NavBar>
    );
  }
}

export default Header;
