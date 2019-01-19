import {
  CHANGE_LINK,
  CHANGE_WIDTH,
  CHANGE_HEIGHT,
  RESET_FORM
} from "./constants";

export function changeLink(link) {
  return {
    type: CHANGE_LINK,
    link
  };
}

export function changeWidth(width) {
  return {
    type: CHANGE_WIDTH,
    width
  };
}

export function changeHeight(height) {
  return {
    type: CHANGE_HEIGHT,
    height
  };
}

export function resetForm(link, width, height) {
  return {
    type: RESET_FORM,
    link,
    width,
    height
  };
}
