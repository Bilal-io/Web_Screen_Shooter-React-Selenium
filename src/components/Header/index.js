import React from "react";

import H2 from "./H2";
import HeaderWrapper from "./HeaderWrapper";
import Grow from "../Grow";
import LogoIcon from "../LogoIcon";
import GithubIcon from "../GithubIcon";

const Header = props => {
  return (
    <HeaderWrapper {...props}>
      <LogoIcon />
      <H2>Web Screen Shooter</H2>
      <Grow />
      <GithubIcon href="https://github.com/Bilal-io/Web_Screen_Shooter-React-Selenium" />
    </HeaderWrapper>
  );
};

export default Header;
