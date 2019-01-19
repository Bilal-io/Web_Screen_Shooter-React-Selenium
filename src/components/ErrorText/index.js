import React, { Component } from "react";
import Typography from "@material-ui/core/Typography";
import ErrorIcon from "@material-ui/icons/Error";

import Wrapper from "./Wrapper";

class ErrorText extends Component {
  constructor(props) {
    super(props);
    this.state = {
      link: this.props.link,
      width: this.props.width,
      height: this.props.height
    };
  }
  state = {};
  render() {
    return (
      <Wrapper>
        <ErrorIcon color="error" />
        <Typography color="error" align="center" component="p">
          {this.state.link}'s screenshot with {this.state.width}x
          {this.state.height} size already exists. If you wish, you can remove
          it and try again
        </Typography>
      </Wrapper>
    );
  }
}

export default ErrorText;
