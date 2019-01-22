import { fromJS } from "immutable";

import appReducer from "../reducer";

import {
  loadScreenshot,
  removeScreenshot,
  screenshotLoaded,
  screenshotLoadingError
} from "../actions";

describe("appReducer", () => {
  let state;
  beforeEach(() => {
    state = fromJS({
      loading: false,
      error: false,
      screenshots: fromJS([])
    });
  });

  it("should return the initial state", () => {
    const expectedResult = state;
    expect(appReducer(undefined, {})).toEqual(expectedResult);
  });

  it("should handle the loadScreenshot action correctly", () => {
    const expectedResult = state
      .set("loading", true)
      .set("error", false)
      .set("screenshots", fromJS([]));

    expect(appReducer(state, loadScreenshot())).toEqual(expectedResult);
  });

  it("should handle the screenshotLoaded action correctly", () => {
    const fixture = fromJS([
      {
        key: "my key",
        screenshot: "my screenshot",
        link: "my link",
        width: "my width",
        height: "my height"
      }
    ]);
    const key = "my key";
    const screenshot = "my screenshot";
    const link = "my link";
    const width = "my width";
    const height = "my height";
    const expectedResult = state
      .set("screenshots", fixture)
      .set("loading", false);

    expect(
      appReducer(state, screenshotLoaded(key, screenshot, link, width, height))
    ).toEqual(expectedResult);
  });
  it("should handle the removeScreenshot action correctly", () => {
    const firstFixture = fromJS([
      {
        key: "my key",
        screenshot: "my screenshot",
        link: "my link",
        width: "my width",
        height: "my height"
      }
    ]);
    state.set("screenshots", firstFixture);
    const lastFixture = fromJS([]);
    const expectedResult = state.set("screenshots", lastFixture);
    const key = "my key";

    expect(appReducer(state, removeScreenshot(key))).toEqual(expectedResult);
  });
  it("should handle the screenshotLoadingError action correctly", () => {
    const fixture = {
      msg: "Not found"
    };
    const expectedResult = state.set("error", fixture).set("loading", false);

    expect(appReducer(state, screenshotLoadingError(fixture))).toEqual(
      expectedResult
    );
  });
});
