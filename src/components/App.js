import React, { Component } from "react";

import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

import ImgCard from "./ImgCard";
import Header from "./Header";
import Form from "./Form";

const styles = {
  formContainer: {
    backgroundColor: "#f0f0f0",
    padding: "80px 0 16px"
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
  componentDidMount() {
    if (localStorage) {
      const historyFromStorage = Object.keys(localStorage).map(key => {
        return JSON.parse(localStorage[key]);
      });
      this.setState({ history: historyFromStorage });
    }
  }

  handleChange = result => {
    this.setState(previousState => {
      return { history: [...previousState.history, result] };
    });
  };
  handleItemDeletion = key => {
    const filteredHistory = this.state.history.filter(item => {
      if (Object.keys(item)[0] !== key) return item;
    });
    this.setState({ history: filteredHistory });
    localStorage.removeItem(key);
  };
  render() {
    let myCards;
    if (this.state.history) {
      myCards = this.state.history.map(el => {
        return (
          <ImgCard
            key={Object.keys(el)[0]} // using index as a key was a bad idea, on delete, React deletes the item with the highest index from the view which is not what I want
            info={el}
            deleteItem={this.handleItemDeletion}
          />
        );
      });
    } else {
      myCards = <h5>No results!</h5>;
    }
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
            {myCards}
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
