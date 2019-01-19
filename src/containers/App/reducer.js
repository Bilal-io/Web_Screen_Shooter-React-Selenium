import { fromJS } from "immutable";

import {
  LOAD_SCREENSHOT_SUCCESS,
  LOAD_SCREENSHOT,
  REMOVE_SCREENSHOT,
  LOAD_SCREENSHOT_ERROR
} from "./constants";
import { loadState } from "../../utils/localStorage";

const initialState = fromJS({
  loading: false,
  error: false,
  screenshots: loadState() || []
});
function appReducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_SCREENSHOT:
      return state.set("loading", true).set("error", false);
    case LOAD_SCREENSHOT_SUCCESS:
      return state.set("loading", false).set(
        "screenshots",
        fromJS([
          {
            key: action.key,
            screenshot: action.screenshot,
            link: action.link,
            width: action.width,
            height: action.height
          },
          ...state.get("screenshots")
        ])
      );
    case REMOVE_SCREENSHOT:
      return state.set(
        "screenshots",
        fromJS([
          ...state
            .get("screenshots")
            .filter(item => item.get("key") !== action.key)
        ])
      );
    case LOAD_SCREENSHOT_ERROR:
      return state.set("loading", false).set("error", action.error);
    default:
      return state;
  }
}

export default appReducer;
