import styled from "styled-components";

const LoaderWrapper = styled.div`
  width: 345px;
  height: 345px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (max-width: 370px) {
    width: 100%;
  }
`;

export default LoaderWrapper;
