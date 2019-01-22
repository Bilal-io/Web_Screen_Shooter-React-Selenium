import React from "react";
import { mount } from "enzyme";

import DeleteIcon from "../index";

const renderComponent = (props = {}) => mount(<DeleteIcon {...props} />);

describe("<DeleteIcon />", () => {
  it("should render an <svg> tag if no route is specified", () => {
    const renderedComponent = renderComponent();
    expect(renderedComponent.find("svg")).toHaveLength(1);
  });

  it("should have a className attribute", () => {
    const className = "test";
    const renderedComponent = renderComponent({ className });
    expect(renderedComponent.find("svg").hasClass(className)).toEqual(true);
  });
});
