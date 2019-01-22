import { fromJS } from "immutable";

import {
  selectGlobal,
  makeSelectScreenshots,
  makeSelectLoading,
  makeSelectError
} from "../selectors";

describe("selectGlobal", () => {
  it("should select the global state", () => {
    const globalState = fromJS({});
    const mockedState = fromJS({
      global: globalState
    });
    expect(selectGlobal(mockedState)).toEqual(globalState);
  });
});

describe("makeSelectLoading", () => {
  const loadingSelector = makeSelectLoading();
  it("should select the loading", () => {
    const loading = false;
    const mockedState = fromJS({
      global: {
        loading
      }
    });
    expect(loadingSelector(mockedState)).toEqual(loading);
  });
});

describe("makeSelectError", () => {
  const errorSelector = makeSelectError();
  it("should select the error", () => {
    const error = 404;
    const mockedState = fromJS({
      global: {
        error
      }
    });
    expect(errorSelector(mockedState)).toEqual(error);
  });
});

describe("makeSelectScreenshots", () => {
  const screenshotsSelector = makeSelectScreenshots();
  it("should select the repos", () => {
    const screenshots = fromJS([]);
    const mockedState = fromJS({
      global: {
        screenshots
      }
    });
    expect(screenshotsSelector(mockedState)).toEqual(screenshots);
  });
});
