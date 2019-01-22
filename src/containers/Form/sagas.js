import uniqid from "uniqid";
import { takeLatest, put, select } from "redux-saga/effects";

import { LOAD_SCREENSHOT } from "../App/constants";

import { screenshotLoaded, screenshotLoadingError } from "../App/actions";

import { RESET_FORM } from "./constants";
import { makeSelectLink, makeSelectWidth, makeSelectHeight } from "./selectors";

export function* getScreenshot() {
  const link = yield select(makeSelectLink());
  const width = yield select(makeSelectWidth());
  const height = yield select(makeSelectHeight());
  try {
    const screenshot = yield fetch(
      `/api/?link=${link}&width=${width}&height=${height}`
    );
    const result = yield screenshot.json();
    yield put(
      screenshotLoaded(
        uniqid(`${link}-${width}-${height}-`),
        result.screenshot,
        result.link.replace(/^(?:https?:\/\/)?(?:www\.)?/i, ""),
        result.width,
        result.height
      )
    );
    yield put({ type: RESET_FORM });
  } catch (error) {
    yield put(screenshotLoadingError(error));
  }
}

export default function* appSaga() {
  yield takeLatest(LOAD_SCREENSHOT, getScreenshot);
}
