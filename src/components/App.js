import React, { Component } from "react";

import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

import ImgCard from "./ImgCard";
import Header from "./Header";
import Form from "./Form";
import "./App.css";

const styles = {
  formContainer: {
    backgroundColor: "#f0f0f0",
    padding: "80px 0 24px"
  }
};

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      history: []
    };
    this.classes = this.props.classes;
  }
  handleChange = result => {
    this.setState({
      history: result
    });
  };
  render() {
    return (
      <Grid container>
        <Grid item xs={12}>
          <Header />
        </Grid>
        <Grid item xs={12} className={this.classes.formContainer}>
          <Grid container justify="center">
            <Form handlePropsChange={this.handleChange} />
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Grid container justify="center">
            {this.state.history.map((el, index) => {
              return <ImgCard key={index} info={el} />;
            })}
          </Grid>
        </Grid>
      </Grid>
    );
  }
}

App.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(App);
