import React, { PureComponent } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { createStructuredSelector } from "reselect";

import { removeScreenshot } from "../App/actions";
import {
  makeSelectLoading,
  makeSelectError,
  makeSelectScreenshots
} from "../App/selectors";

import Wrapper from "../../components/FlexWrapper";
import LoadingIndicator from "../../components/LoadingIndicator";
import Card from "../../components/Card";

class DisplayCards extends PureComponent {
  render() {
    return (
      <Wrapper justifyContent={"center"} flexWrap={true}>
        <LoadingIndicator loading={this.props.loading} />
        {this.props.screenshots.map(value => {
          const props = {
            myKey: value.get("key"),
            screenshot: value.get("screenshot"),
            link: value.get("link"),
            width: value.get("width"),
            height: value.get("height"),
            onRemove: this.props.onRemove
          };
          return <Card key={props.myKey} {...props} />;
        })}
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

const mapStateToProps = createStructuredSelector({
  loading: makeSelectLoading(),
  error: makeSelectError(),
  screenshots: makeSelectScreenshots()
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DisplayCards);
