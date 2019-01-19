import React, { PureComponent } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import { removeScreenshot } from "../App/actions";
import Wrapper from "./Wrapper";
import CardWrapper from "./CardWrapper";
import ImgWrapper from "./ImgWrapper";
import Button from "../../components/Button";
import H2 from "../../components/H2";
import H3 from "../../components/H3";

import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import DeleteIcon from "@material-ui/icons/Delete";
import SaveIcon from "@material-ui/icons/Save";

class DisplayCards extends PureComponent {
  render() {
    return (
      <Wrapper>
        {this.props.screenshots.map(value => (
          <CardWrapper key={value.get("key")}>
            <ImgWrapper>
              <CardMedia
                component="img"
                alt={"This is a screenshot of " + value.get("link")}
                style={{ height: "auto" }}
                image={`data:image/png;base64, ${value.get("screenshot")}`}
                title={value.get("link")}
              />
            </ImgWrapper>
            <CardContent>
              <H2>Website:</H2>
              <H3>{value.get("link").toUpperCase()}</H3>
              <Typography component="p">
                Width: {value.get("width")} - Height: {value.get("height")}
              </Typography>
            </CardContent>
            <CardActions>
              <Button
                fullWidth={true}
                variant="contained"
                size="medium"
                color="primary"
                download={`${value.get("link")}-${value.get(
                  "width"
                )}x${value.get("height")}.png`}
                href={
                  "data:application/octet-stream;base64," +
                  value.get("screenshot")
                }
              >
                SAVE
                <SaveIcon style={{ marginLeft: 8 }} />
              </Button>
              <Button
                fullWidth={true}
                variant="contained"
                color="secondary"
                onClick={() => this.props.onRemove(value.get("key"))}
              >
                DELETE
                <DeleteIcon style={{ marginLeft: 8 }} />
              </Button>
            </CardActions>
          </CardWrapper>
        ))}
      </Wrapper>
    );
  }
}

DisplayCards.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
  screenshots: PropTypes.oneOfType([PropTypes.object, PropTypes.bool])
};

const mapDispatchToProps = dispatch => ({
  onRemove(key) {
    dispatch(removeScreenshot(key));
  }
});

const mapStateToProps = rootState => {
  const globalState = rootState.get("global");

  return {
    loading: globalState.get("loading"),
    error: globalState.get("error"),
    screenshots: globalState.get("screenshots")
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DisplayCards);
