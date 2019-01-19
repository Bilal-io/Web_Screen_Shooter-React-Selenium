import { fromJS } from "immutable";

import {
  CHANGE_LINK,
  CHANGE_WIDTH,
  CHANGE_HEIGHT,
  RESET_FORM
} from "./constants";

export const initialState = fromJS({
  link: "",
  width: "",
  height: ""
});

function formReducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_LINK:
      return state.set("link", action.link);
    case CHANGE_WIDTH:
      return state.set("width", action.width);
    case CHANGE_HEIGHT:
      return state.set("height", action.height);
    case RESET_FORM:
      return state
        .set("link", "")
        .set("width", "")
        .set("height", "");
    default:
      return state;
  }
}

export default formReducer;
