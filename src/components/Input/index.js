import styled from "styled-components";

import TextField from "@material-ui/core/TextField";

const Input = styled(TextField)`
  && {
    margin: 0 8px 0 0;
    @media (max-width: 1280px) {
      width: 100%;
      margin: 0 8px 16px;
    }
  }
`;
export default Input;
