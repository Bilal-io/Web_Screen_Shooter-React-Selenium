import styled from "styled-components";

import MUI_CardContent from "@material-ui/core/CardContent";

const ImgWrapper = styled(MUI_CardContent)`
  && {
    width: 345px;
    height: 220px;
    padding: 0;
    overflow: hidden;
    background-color: #444;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export default ImgWrapper;
