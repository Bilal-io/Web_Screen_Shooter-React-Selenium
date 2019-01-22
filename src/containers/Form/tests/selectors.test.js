import { fromJS } from "immutable";

import {
  selectForm,
  makeSelectLink,
  makeSelectWidth,
  makeSelectHeight
} from "../selectors";

describe("selectGlobal", () => {
  it("should select the form state", () => {
    const formState = fromJS({
      link: "",
      width: "",
      height: ""
    });
    const mockedState = fromJS({
      form: formState
    });
    expect(selectForm(mockedState)).toEqual(formState);
  });
});

describe("makeSelectLink", () => {
  const loadingSelector = makeSelectLink();
  it("should select the link", () => {
    const link = "test";
    const mockedState = fromJS({
      form: {
        link
      }
    });
    expect(loadingSelector(mockedState)).toEqual(link);
  });
});

describe("makeSelectWidth", () => {
  const widthSelector = makeSelectWidth();
  it("should select the error", () => {
    const width = "400";
    const mockedState = fromJS({
      form: {
        width
      }
    });
    expect(widthSelector(mockedState)).toEqual(width);
  });
});

describe("makeSelectHeight", () => {
  const heightSelector = makeSelectHeight();
  it("should select the repos", () => {
    const height = "800";
    const mockedState = fromJS({
      form: {
        height
      }
    });
    expect(heightSelector(mockedState)).toEqual(height);
  });
});
