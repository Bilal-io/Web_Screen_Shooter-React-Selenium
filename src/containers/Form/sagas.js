import uniqid from "uniqid";
import { takeLatest, put, select } from "redux-saga/effects";

import {
  LOAD_SCREENSHOT_SUCCESS,
  LOAD_SCREENSHOT,
  LOAD_SCREENSHOT_ERROR
} from "../App/constants";

import { RESET_FORM } from "./constants";

export const formState = rootState => rootState.get("form");

function* getScreenshot(dispatch) {
  const state = yield select();
  const formState = yield state.get("form");
  try {
    const screenshot = yield fetch(
      `/api/?link=${formState.get("link")}&width=${formState.get(
        "width"
      )}&height=${formState.get("height")}`
    );
    const result = yield screenshot.json();
    yield put({
      type: LOAD_SCREENSHOT_SUCCESS,
      key: uniqid(
        `${formState.get("link")}-${formState.get("width")}-${formState.get(
          "height"
        )}-`
      ),
      screenshot: result.screenshot,
      link: result.link.replace(/^(?:https?:\/\/)?(?:www\.)?/i, ""),
      width: result.width,
      height: result.height
    });
    yield put({ type: RESET_FORM });
  } catch (error) {
    console.log(Error(error));
    yield put({ type: LOAD_SCREENSHOT_ERROR, error });
  }
}

export function* appSaga() {
  yield takeLatest(LOAD_SCREENSHOT, getScreenshot);
}
