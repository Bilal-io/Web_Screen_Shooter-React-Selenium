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
    const cleanedLink = link.replace(/^(?:https?:\/\/)?(?:www\.)?/i, "");
    yield put(
      screenshotLoaded(
        uniqid(`${cleanedLink}-${width}-${height}-`),
        result.screenshot,
        cleanedLink,
        width,
        height
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
