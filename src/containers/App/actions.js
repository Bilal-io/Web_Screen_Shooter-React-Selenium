import {
  LOAD_SCREENSHOT_SUCCESS,
  LOAD_SCREENSHOT,
  REMOVE_SCREENSHOT,
  LOAD_SCREENSHOT_ERROR
} from "./constants";

export function loadScreenshot() {
  return {
    type: LOAD_SCREENSHOT
  };
}

export function removeScreenshot(key) {
  return {
    type: REMOVE_SCREENSHOT,
    key
  };
}

export function screenshotLoaded(key, screenshot, link, width, height) {
  return {
    type: LOAD_SCREENSHOT_SUCCESS,
    key,
    screenshot,
    link,
    width,
    height
  };
}

export function screenshotLoadingError(error) {
  return {
    type: LOAD_SCREENSHOT_ERROR,
    error
  };
}
