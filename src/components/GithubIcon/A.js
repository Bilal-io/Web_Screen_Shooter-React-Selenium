import styled from "styled-components";

import NormalA from "../A";

const A = styled(NormalA)`
  display: flex;
  padding: 12px;
  border-radius: 50%;
  background-color: #3f51b5;
  &:hover {
    background-color: #4f5fb6;
  }
`;

export default A;
