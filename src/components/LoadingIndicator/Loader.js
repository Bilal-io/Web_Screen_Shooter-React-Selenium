import styled from "styled-components";
import PropTypes from "prop-types";

const Loader = styled.span`
  display: inline-block;
  height: 13px;
  width: 13px;
  background-color: #444;
  border-radius: 50%;
  margin: 0px 2px;
  -webkit-animation: bounce 1.5s infinite ease-in-out both;
  animation: bounce 1.5s infinite ease-in-out both;
  animation-delay: ${props => props.delay}s;

  @keyframes bounce {
    0%,
    80%,
    100% {
      transform: scale(0);
    }
    40% {
      transform: scale(1);
    }
  }
`;

export default Loader;

Loader.propTypes = {
  delay: PropTypes.string
};
