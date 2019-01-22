import React from "react";
import PropTypes from "prop-types";

import Wrapper from "../FlexWrapper";
import StyledCard from "../StyledCard";
import StyledCardContent from "./StyledCardContent";
import P from "./StyledP";
import Button from "./StyledButton";
import H2 from "../H2";
import H3 from "../H3";
import Img from "../Img";
import DeleteIcon from "../DeleteIcon";
import SaveIcon from "../SaveIcon";
import CardActions from "./CardActionsWrapper";

function Card(props) {
  const { onRemove, myKey, screenshot, link, width, height } = props;
  return (
    <StyledCard>
      <StyledCardContent>
        <Img
          alt={"This is a screenshot of " + link}
          src={`data:image/png;base64, ${screenshot}`}
        />
      </StyledCardContent>
      <Wrapper
        flexDirection={"column"}
        flexWrap={true}
        paddingLeft={16}
        paddingRight={16}
      >
        <H2>Website:</H2>
        <H3>{link.toUpperCase()}</H3>
        <P>
          Width: {width} - Height: {height}
        </P>
      </Wrapper>
      <CardActions>
        <Button
          fullWidth={true}
          variant="contained"
          color="primary"
          download={`${myKey}.png`}
          href={"data:application/octet-stream;base64," + screenshot}
        >
          SAVE
          <SaveIcon style={{ marginLeft: 8 }} />
        </Button>
        <Button
          fullWidth={true}
          variant="contained"
          color="secondary"
          onClick={() => onRemove(myKey)}
        >
          DELETE
          <DeleteIcon style={{ marginLeft: 8 }} />
        </Button>
      </CardActions>
    </StyledCard>
  );
}

Card.propTypes = {
  onRemove: PropTypes.func.isRequired,
  myKey: PropTypes.string.isRequired,
  screenshot: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  width: PropTypes.string.isRequired,
  height: PropTypes.string.isRequired
};

export default Card;
