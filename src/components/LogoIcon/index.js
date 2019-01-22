import React from "react";

import Img from "./Img";
import Logo from "./Logo.svg";

function LogoIcon(props) {
  return <Img src={Logo} {...props} alt="Screen Shooter Logo" />;
}

export default LogoIcon;
