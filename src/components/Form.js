import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import InputAdornment from "@material-ui/core/InputAdornment";

import "./Form.css";

const styles = theme => ({
  form: {
    display: "flex",
    flexWrap: "wrap"
  },
  button: {
    padding: "18px 24px",
    [theme.breakpoints.down("md")]: {
      width: "100%",
      margin: "0 8px 16px"
    }
  },
  textInput: {
    margin: "0 8px 0 0",
    [theme.breakpoints.down("md")]: {
      width: "100%",
      margin: "0 8px 16px"
    }
  }
});

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      image: "",
      link: "",
      width: "",
      height: "",
      history: this.props.onInputChange,
      buttonDisabled: false
    };
    this.classes = this.props.classes;
  }

  componentDidMount() {
    const historyFromStorage = Object.keys(localStorage).map(key => {
      let parsed = JSON.parse(key);
      return {
        image: localStorage[key],
        parsed
      };
    });
    console.log(historyFromStorage);
    this.setState({ history: historyFromStorage });
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }
  handleSubmit = async event => {
    event.preventDefault();

    // handle localstorage cache
    let value = `{
      link: ${this.state.link},
      width: ${this.state.width},
      "height: ${this.state.height}
    }`;
    console.log("Value to be checked " + value);
    // let KeyName = window.localStorage.key(this.state.history.length);

    let cachedResult = localStorage.getItem(value);

    console.log("Cached result " + cachedResult);
    if (cachedResult) {
      this.setState({
        link: cachedResult.link,
        width: cachedResult.width,
        height: cachedResult.height
      });
      return;
    }

    this.setState({ buttonDisabled: true });
    const response = await fetch("/", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        link: this.state.link,
        width: this.state.width,
        height: this.state.height
      })
    });
    response.text().then(res => this.onSetResult(res, value));
  };

  onSetResult = (result, key) => {
    localStorage.setItem(key, JSON.stringify(result));
    console.log(localStorage);
    this.setState({ image: result, buttonDisabled: false });

    // add event to history
    this.setState(prevState => ({
      history: [...prevState.history, JSON.parse(key)]
    }));
    console.log(this.state.history);
    this.props.handlePropsChange(this.state.history);
  };

  render() {
    return (
      <form
        onSubmit={this.handleSubmit}
        autoComplete="off"
        className={this.classes.form}
      >
        <TextField
          required
          type="text"
          name="link"
          className={this.classes.textInput}
          onChange={event => this.handleChange(event)}
          variant="outlined"
          label="Website"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">https://</InputAdornment>
            )
          }}
        />
        <TextField
          required
          type="number"
          name="width"
          className={this.classes.textInput}
          onChange={event => this.handleChange(event)}
          variant="outlined"
          label="Width"
          InputProps={{
            endAdornment: <InputAdornment position="end">pixels</InputAdornment>
          }}
        />
        <TextField
          required
          type="number"
          name="height"
          className={this.classes.textInput}
          onChange={event => this.handleChange(event)}
          variant="outlined"
          label="Height"
          InputProps={{
            endAdornment: <InputAdornment position="end">pixels</InputAdornment>
          }}
        />
        <Button
          variant="outlined"
          size="large"
          color="secondary"
          type="submit"
          disabled={this.state.buttonDisabled}
          className={this.classes.button}
        >
          Aim And Shoot!
        </Button>
      </form>
    );
  }
}

Form.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Form);
