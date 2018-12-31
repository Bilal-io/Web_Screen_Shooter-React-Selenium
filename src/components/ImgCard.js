import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

import "./ImgCard.css";

const styles = {
  grid: {
    margin: 8
  },
  card: {
    maxWidth: 345
  },
  media: {
    height: "auto"
  },
  mediaContainer: {
    width: 345,
    height: 220,
    padding: 0,
    overflow: "hidden",
    backgroundColor: "#444",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  }
};

class ImgCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: this.props.info.link,
      image: this.props.info.image,
      width: this.props.info.width,
      height: this.props.info.height
    };
    this.classes = this.props.classes;
  }

  render() {
    return (
      <Grid item className={this.classes.grid}>
        <Card className={this.classes.card}>
          <CardContent className={this.classes.mediaContainer}>
            <CardMedia
              component="img"
              alt={"This is a screenshot of " + this.state.name}
              className={this.classes.media}
              image={`data:image/png;base64, ${this.state.image}`}
              title={this.state.name}
            />
          </CardContent>
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              Website: {this.state.name.toUpperCase()}
            </Typography>
            <Typography component="p">
              Width: {this.state.width} - Height: {this.state.height}
            </Typography>
          </CardContent>
          <CardActions>
            <Button
              fullWidth={true}
              variant="contained"
              size="medium"
              color="primary"
              download={`${this.state.name}-${this.state.width}x${
                this.state.height
              }.png`}
              href={"data:application/octet-stream;base64," + this.state.image}
            >
              SAVE
            </Button>
          </CardActions>
        </Card>
      </Grid>
    );
  }
}

ImgCard.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ImgCard);
