import styled from "styled-components";

const HeaderWrapper = styled.header`
  display: flex;
  position: relative;
  align-items: center;
  min-height: 56px;
  padding-left: 16px;
  padding-right: 16px;
  background-color: #3f51b5;
  color: #ffffff;
  @media (min-width: 600px) {
    min-height: 64px;
    padding-left: 24px;
    padding-right: 24px;
  }
`;

export default HeaderWrapper;
