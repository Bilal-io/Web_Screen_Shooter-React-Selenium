import {
  CHANGE_LINK,
  CHANGE_WIDTH,
  CHANGE_HEIGHT,
  RESET_FORM
} from "../constants";

import { changeLink, changeWidth, changeHeight, resetForm } from "../actions";

describe("Form Actions", () => {
  describe("changeLink", () => {
    it("should return the correct type and the passed value", () => {
      const link = "https://test.com";
      const expectedResult = {
        type: CHANGE_LINK,
        link
      };

      expect(changeLink(link)).toEqual(expectedResult);
    });
  });

  describe("changeWidth", () => {
    it("should return the correct type and the passed value", () => {
      const width = "123";
      const expectedResult = {
        type: CHANGE_WIDTH,
        width
      };

      expect(changeWidth(width)).toEqual(expectedResult);
    });
  });

  describe("changeHeight", () => {
    it("should return the correct type and the passed value", () => {
      const height = "123";
      const expectedResult = {
        type: CHANGE_HEIGHT,
        height
      };

      expect(changeHeight(height)).toEqual(expectedResult);
    });
  });

  describe("ResetForm", () => {
    it("should return the correct type", () => {
      const link = "";
      const width = "";
      const height = "";
      const expectedResult = {
        type: RESET_FORM,
        link,
        width,
        height
      };

      expect(resetForm(link, width, height)).toEqual(expectedResult);
    });
  });
});
