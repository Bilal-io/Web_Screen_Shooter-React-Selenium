import React from "react";
import { mount } from "enzyme";

import LogoIcon from "../index";

describe("<LogoIcon />", () => {
  it("should have a className attribute", () => {
    const className = "test";
    const wrapper = mount(<LogoIcon className={className} />);
    expect(wrapper.prop("className")).toBeDefined();
  });

  it("should have img as a child", () => {
    const renderedComponent = mount(<LogoIcon />);
    expect(renderedComponent.find("img")).toHaveLength(1);
  });
});
