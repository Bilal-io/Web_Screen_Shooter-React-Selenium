import React, { PureComponent } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import { removeScreenshot } from "../App/actions";

import Wrapper from "../../components/FlexWrapper";
import StyledCard from "./StyledCard";
import StyledCardContent from "./StyledCardContent";
import P from "./StyledP";
import Button from "./StyledButton";
import H2 from "../../components/H2";
import H3 from "../../components/H3";
import Img from "../../components/Img";
import LoadingIndicator from "../../components/LoadingIndicator";
import DeleteIcon from "../../components/DeleteIcon";
import SaveIcon from "../../components/SaveIcon";
import CardActions from "./CardActionsWrapper";

class DisplayCards extends PureComponent {
  render() {
    return (
      <Wrapper justifyContent={"center"} flexWrap={true}>
        <LoadingIndicator loading={this.props.loading} />
        {this.props.screenshots.map(value => (
          <StyledCard key={value.get("key")}>
            <StyledCardContent>
              <Img
                alt={"This is a screenshot of " + value.get("link")}
                src={`data:image/png;base64, ${value.get("screenshot")}`}
              />
            </StyledCardContent>
            <Wrapper
              flexDirection={"column"}
              flexWrap={true}
              paddingLeft={16}
              paddingRight={16}
            >
              <H2>Website:</H2>
              <H3>{value.get("link").toUpperCase()}</H3>
              <P>
                Width: {value.get("width")} - Height: {value.get("height")}
              </P>
            </Wrapper>
            <CardActions>
              <Button
                fullWidth={true}
                variant="contained"
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
          </StyledCard>
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
