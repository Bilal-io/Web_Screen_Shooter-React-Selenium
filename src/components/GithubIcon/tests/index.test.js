import React from "react";
import { mount } from "enzyme";

import GithubIcon from "../index";

describe("<GithubIcon />", () => {
  it("should render an <a> tag if no route is specified", () => {
    const renderedComponent = mount(<GithubIcon className="test" />);
    expect(renderedComponent.find("a")).toHaveLength(1);
  });
  it("should have a className", () => {
    const renderedComponent = mount(<GithubIcon className="test" />);
    expect(renderedComponent.find("a").prop("className")).toBeDefined();
  });
  it("should have an href attribute", () => {
    const href = "https:/google.com";
    const renderedComponent = mount(<GithubIcon href={href} />);
    expect(renderedComponent.prop("href")).toEqual(href);
  });
  it("should have img as a child", () => {
    const href = "https:/google.com";
    const renderedComponent = mount(<GithubIcon href={href} />);
    expect(renderedComponent.find("img")).toHaveLength(1);
  });
});
