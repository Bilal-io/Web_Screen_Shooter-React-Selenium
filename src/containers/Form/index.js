import React, { PureComponent } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { createStructuredSelector } from "reselect";

import { makeSelectLink, makeSelectWidth, makeSelectHeight } from "./selectors";
import { makeSelectLoading, makeSelectError } from "../App/selectors";
import { changeLink, changeWidth, changeHeight } from "./actions";
import { loadScreenshot } from "../App/actions";

import StyledForm from "./StyledForm";
import StyledButton from "./StyledButton";
import Wrapper from "../../components/FlexWrapper";
import Input from "../../components/Input";

export class Form extends PureComponent {
  onSetResult = (image, key) => {
    let value = {
      [key]: {
        image,
        link: this.props.link,
        width: this.props.width,
        height: this.props.height
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
    return (
      <Wrapper
        flexWrap={true}
        justifyContent={"center"}
        backgroundColor={"ghostwhite"}
        paddingTop={80}
        paddingBottom={16}
      >
        <StyledForm onSubmit={this.props.onSubmitForm} autoComplete="off">
          <Input
            required
            type="url"
            name="link"
            onChange={this.props.onChangeLink}
            disabled={this.props.loading}
            value={this.props.link}
            variant="outlined"
            label="https://example.com"
          />
          <Input
            required
            type="number"
            name="width"
            onChange={this.props.onChangeWidth}
            disabled={this.props.loading}
            value={this.props.width}
            variant="outlined"
            label="Width"
          />
          <Input
            required
            type="number"
            name="height"
            onChange={this.props.onChangeHeight}
            disabled={this.props.loading}
            value={this.props.height}
            variant="outlined"
            label="Height"
          />
          <StyledButton
            variant="outlined"
            size="large"
            color="secondary"
            type="submit"
            disabled={this.props.loading}
          >
            Aim And Shoot!
          </StyledButton>
        </StyledForm>
      </Wrapper>
    );
  }
}

Form.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
  onSubmitForm: PropTypes.func,
  link: PropTypes.string,
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  height: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  onChangeLink: PropTypes.func,
  onChangeWidth: PropTypes.func,
  onChangeHeight: PropTypes.func
};

const mapDispatchToProps = dispatch => ({
  onChangeLink(evt) {
    dispatch(changeLink(evt.target.value));
  },
  onChangeWidth(evt) {
    dispatch(changeWidth(evt.target.value));
  },
  onChangeHeight(evt) {
    dispatch(changeHeight(evt.target.value));
  },
  onSubmitForm(evt) {
    if (evt !== undefined && evt.preventDefault) evt.preventDefault();
    dispatch(loadScreenshot());
  }
});

const mapStateToProps = createStructuredSelector({
  loading: makeSelectLoading(),
  error: makeSelectError(),
  link: makeSelectLink(),
  width: makeSelectWidth(),
  height: makeSelectHeight()
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Form);
