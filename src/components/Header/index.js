import React from "react";

import H2 from "./H2";
import Navbar from "./Navbar";
import Grow from "../Grow";
import LogoIcon from "../LogoIcon";
import GithubIcon from "../GithubIcon";

const Header = props => {
  return (
    <Navbar {...props}>
      <LogoIcon />
      <H2>Web Screen Shooter</H2>
      <Grow />
      <GithubIcon href="https://github.com/Bilal-io/Web_Screen_Shooter-React-Selenium" />
    </Navbar>
  );
};

export default Header;
