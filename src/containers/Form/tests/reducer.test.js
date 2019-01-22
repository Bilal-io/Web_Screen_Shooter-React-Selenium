import { fromJS } from "immutable";

import formReducer from "../reducer";

import { changeLink, changeWidth, changeHeight, resetForm } from "../actions";

describe("formReducer", () => {
  let state;
  beforeEach(() => {
    state = fromJS({
      link: "",
      width: "",
      height: ""
    });
  });

  it("should return the initial state", () => {
    const expectedResult = state;
    expect(formReducer(undefined, {})).toEqual(expectedResult);
  });

  it("should handle the changeLink action correctly", () => {
    const link = "https://test.com";
    const expectedResult = state.set("link", link);

    expect(formReducer(state, changeLink(link))).toEqual(expectedResult);
  });

  it("should handle the changeWidth action correctly", () => {
    const width = "850";
    const expectedResult = state.set("width", width);

    expect(formReducer(state, changeWidth(width))).toEqual(expectedResult);
  });

  it("should handle the changeHeight action correctly", () => {
    const height = "1200";
    const expectedResult = state.set("height", height);

    expect(formReducer(state, changeHeight(height))).toEqual(expectedResult);
  });
  it("should handle the resetForm action correctly", () => {
    const link = "";
    const width = "";
    const height = "";
    const expectedResult = state
      .set("link", link)
      .set("width", width)
      .set("height", height);

    expect(formReducer(state, resetForm(link, width, height))).toEqual(
      expectedResult
    );
  });
});
