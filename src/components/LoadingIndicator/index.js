import React from "react";
import PropTypes from "prop-types";

function LoadingIndicator({ loading }) {
  if (loading) {
    return <p>Loading</p>;
  }
  return null;
}

LoadingIndicator.propTypes = {
  loading: PropTypes.bool
};
export default LoadingIndicator;
