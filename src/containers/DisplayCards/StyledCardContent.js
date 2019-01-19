import styled from "styled-components";

const StyledCardContent = styled.div`
  && {
    width: 345px;
    height: 220px;
    padding: 0;
    overflow: hidden;
    background-color: #444;
    display: flex;
    align-items: center;
    justify-content: center;
    & > img {
      height: auto;
      width: 100%;
    }
  }
`;

export default StyledCardContent;
