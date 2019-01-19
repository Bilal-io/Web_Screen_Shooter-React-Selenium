import styled from "styled-components";
import PropTypes from "prop-types";

const Wrapper = styled.div`
  display: flex;
  flex-wrap: ${props => (props.flexWrap ? "wrap" : "")};
  justify-content: ${props => props.justifyContent};
  align-items: ${props => props.alignItems};
  flex-direction: ${props => props.flexDirection};
  padding-left: ${props => (props.paddingLeft ? props.paddingLeft + "px" : "")};
  padding-right: ${props =>
    props.paddingRight ? props.paddingRight + "px" : ""};
  padding-top: ${props => (props.paddingTop ? props.paddingTop + "px" : "")};
  padding-bottom: ${props =>
    props.paddingBottom ? props.paddingBottom + "px" : ""};
  background-color: ${props => props.backgroundColor};
`;

Wrapper.propTypes = {
  flexWrap: PropTypes.bool,
  justifyContent: PropTypes.string,
  alignItems: PropTypes.string,
  flexDirection: PropTypes.string,
  paddingLeft: PropTypes.number,
  paddingRight: PropTypes.number,
  paddingTop: PropTypes.number,
  paddingBottom: PropTypes.number,
  backgroundColor: PropTypes.string
};

export default Wrapper;
