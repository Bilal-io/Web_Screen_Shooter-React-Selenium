import React from "react";

import A from "./A";
import Img from "./Img";
import GithubLogo from "./GithubLogo.svg";

const GithubIcon = props => {
  return (
    <A target="_blank" {...props}>
      <Img src={GithubLogo} alt="Screen Shooter Logo" />
    </A>
  );
};

export default GithubIcon;
