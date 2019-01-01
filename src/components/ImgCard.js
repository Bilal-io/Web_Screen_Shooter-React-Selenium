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
import DeleteIcon from "@material-ui/icons/Delete";
import SaveIcon from "@material-ui/icons/Save";

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
  },
  rightIcon: {
    marginLeft: 8
  }
};

class ImgCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      link: Object.values(props.info)[0].link,
      width: Object.values(props.info)[0].width,
      height: Object.values(props.info)[0].height,
      image: Object.values(props.info)[0].image,
      key: Object.keys(props.info)[0]
    };
    this.key = Object.keys(props.info);
    this.classes = this.props.classes;
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.props.deleteItem(this.state.key);
  }

  render() {
    return (
      <Grid item className={this.classes.grid}>
        <Card className={this.classes.card}>
          <CardContent className={this.classes.mediaContainer}>
            <CardMedia
              component="img"
              alt={"This is a screenshot of " + this.state.link}
              className={this.classes.media}
              image={`data:image/png;base64, ${this.state.image}`}
              title={this.state.link}
            />
          </CardContent>
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              Website: {this.state.link.toUpperCase()}
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
              download={`${this.state.link}-${this.state.width}x${
                this.state.height
              }.png`}
              href={"data:application/octet-stream;base64," + this.state.image}
            >
              SAVE
              <SaveIcon className={this.classes.rightIcon} />
            </Button>
            <Button
              fullWidth={true}
              variant="contained"
              color="secondary"
              className={this.classes.button}
              onClick={this.handleClick}
            >
              DELETE
              <DeleteIcon className={this.classes.rightIcon} />
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
