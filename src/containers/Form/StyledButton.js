import styled from "styled-components";
import C_Button from "../../components/Button";

const StyledButton = styled(C_Button)`
  && {
    padding: 18px 24px;
    @media (max-width: 1280px) {
      width: 100%;
      margin: 0 8px 16px;
    }
  }
`;

export default StyledButton;
