import React from "react";
import PropTypes from "prop-types";

import LoaderWrapper from "./LoaderWrapper";
import Loader from "./Loader";
import StyledCard from "../StyledCard";

function LoadingIndicator({ loading }) {
  if (loading) {
    return (
      <StyledCard>
        <LoaderWrapper>
          <div>
            <Loader delay={"-0.16"} />
            <Loader />
            <Loader delay={"0.16"} />
          </div>
          <span>Shooting...</span>
        </LoaderWrapper>
      </StyledCard>
    );
  }
  return null;
}

LoadingIndicator.propTypes = {
  loading: PropTypes.bool
};
export default LoadingIndicator;
