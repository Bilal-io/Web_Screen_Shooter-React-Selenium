import React from "react";
import { shallow } from "enzyme";

import App from "../index";
import DisplayCards from "../../DisplayCards";
import Form from "../../Form";
import Header from "../../../components/Header";

describe("<App />", () => {
  it("should render the header", () => {
    const renderedComponent = shallow(<App />);
    expect(renderedComponent.find(Header)).toHaveLength(1);
  });
  it("should render the cards", () => {
    const renderedComponent = shallow(<App />);
    expect(renderedComponent.find(DisplayCards)).toHaveLength(1);
  });
  it("should render the form", () => {
    const renderedComponent = shallow(<App />);
    expect(renderedComponent.find(Form)).toHaveLength(1);
  });
});
