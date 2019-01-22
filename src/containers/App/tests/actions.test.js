import {
  LOAD_SCREENSHOT,
  REMOVE_SCREENSHOT,
  LOAD_SCREENSHOT_SUCCESS,
  LOAD_SCREENSHOT_ERROR
} from "../constants";

import {
  loadScreenshot,
  removeScreenshot,
  screenshotLoaded,
  screenshotLoadingError
} from "../actions";

describe("App Actions", () => {
  describe("loadScreenshot", () => {
    it("should return the correct type", () => {
      const expectedResult = {
        type: LOAD_SCREENSHOT
      };

      expect(loadScreenshot()).toEqual(expectedResult);
    });
  });

  describe("removeScreenshot", () => {
    it("should return the correct type and the passed key", () => {
      const key = "test";
      const expectedResult = {
        type: REMOVE_SCREENSHOT,
        key
      };

      expect(removeScreenshot(key)).toEqual(expectedResult);
    });
  });

  describe("screenshotLoaded", () => {
    it("should return the correct type and the screenshot's properties", () => {
      const key = "key";
      const screenshot = "screenshot";
      const link = "link";
      const width = "width";
      const height = "height";
      const expectedResult = {
        type: LOAD_SCREENSHOT_SUCCESS,
        key,
        screenshot,
        link,
        width,
        height
      };

      expect(screenshotLoaded(key, screenshot, link, width, height)).toEqual(
        expectedResult
      );
    });
  });

  describe("screenshotLoadingError", () => {
    it("should return the correct type and the error", () => {
      const error = {
        msg: "Something went wrong!"
      };
      const expectedResult = {
        type: LOAD_SCREENSHOT_ERROR,
        error
      };

      expect(screenshotLoadingError(error)).toEqual(expectedResult);
    });
  });
});
