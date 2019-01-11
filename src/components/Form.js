import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import InputAdornment from "@material-ui/core/InputAdornment";
import Typography from "@material-ui/core/Typography";
import ErrorIcon from "@material-ui/icons/Error";

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
  },
  itemExistsError: {
    marginTop: 8
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
      disabled: false,
      itemExists: false
    };
    this.classes = this.props.classes;
    this.handleChange = this.handleChange.bind(this);
    this.onSetResult = this.onSetResult.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.resetForm = this.resetForm.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
      itemExists: false
    });
  }
  resetForm() {
    this.setState({
      link: "",
      width: "",
      height: ""
    });
  }
  handleSubmit = async event => {
    event.preventDefault();

    // remove http:// https:// and www.
    let fixedLink = await this.state.link.replace(
      /^(?:https?:\/\/)?(?:www\.)?/i,
      ""
    );
    this.setState({ link: fixedLink });

    // Check new form values against localStorage before making an API call
    let key = await `${this.state.link}:${this.state.width}-${
      this.state.height
    }`;
    this.setState({ disabled: true });

    let cachedResult = localStorage.getItem(key);
    if (cachedResult) {
      this.setState({ disabled: false, itemExists: true });
      this.resetForm();
      return;
    }

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
    response
      .text()
      .then(res => this.onSetResult(res, key))
      .catch(err => {
        this.setState({ disabled: false });
        throw err;
      });
  };

  onSetResult = (image, key) => {
    let value = {
      [key]: {
        image,
        link: this.state.link,
        width: this.state.width,
        height: this.state.height
      }
    };
    // add values to localStorage
    localStorage.setItem(key, JSON.stringify(value));
    // add image to State, and enable form
    this.setState({ image: image, disabled: false });
    // send values to parent
    this.props.handlePropsChange(value);
    this.resetForm();
  };

  render() {
    let itemExistsError;
    if (this.state.itemExists) {
      itemExistsError = (
        <Grid
          container
          justify="center"
          alignItems="center"
          spacing={8}
          className={this.classes.itemExistsError}
        >
          <Grid item align="center">
            <ErrorIcon color="error" />
          </Grid>
          <Grid item align="center">
            <Typography color="error" align="center" component="p">
              {this.state.link}'s screenshot with {this.state.width}x
              {this.state.height} size already exists. If you wish, you can
              remove it and try again
            </Typography>
          </Grid>
        </Grid>
      );
    }
    return (
      <Fragment>
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
            disabled={this.state.disabled}
            value={this.state.link}
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
            disabled={this.state.disabled}
            value={this.state.width}
            variant="outlined"
            label="Width"
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">pixels</InputAdornment>
              )
            }}
          />
          <TextField
            required
            type="number"
            name="height"
            className={this.classes.textInput}
            onChange={event => this.handleChange(event)}
            disabled={this.state.disabled}
            value={this.state.height}
            variant="outlined"
            label="Height"
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">pixels</InputAdornment>
              )
            }}
          />
          <Button
            variant="outlined"
            size="large"
            color="secondary"
            type="submit"
            disabled={this.state.disabled}
            className={this.classes.button}
          >
            Aim And Shoot!
          </Button>
        </form>
        {itemExistsError}
      </Fragment>
    );
  }
}

Form.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Form);
