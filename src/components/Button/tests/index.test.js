import React from "react";
import { mount } from "enzyme";

import Button from "../index";

const fakeFunc = () => {};
const href = "http://mxstbr.com";
const children = <h1>Test</h1>;
const renderComponent = (props = {}) =>
  mount(<Button {...props}>{children}</Button>);

describe("<Button />", () => {
  it("should render an <a> tag if no route is specified", () => {
    const renderedComponent = renderComponent({ href: href });
    expect(renderedComponent.find("a")).toHaveLength(1);
  });

  it("should render a <button> tag to if the href attribute is not specified", () => {
    const renderedComponent = renderComponent({ onClick: fakeFunc });
    expect(renderedComponent.find("button")).toHaveLength(1);
  });

  it("should have an href attribute", () => {
    const renderedComponent = renderComponent({ href: href });
    expect(renderedComponent.prop("href")).toEqual(href);
  });

  it("should have children", () => {
    const renderedComponent = renderComponent();
    expect(renderedComponent.contains(children)).toEqual(true);
  });
  it("should handle click events", () => {
    const onClickSpy = jest.fn();
    const renderedComponent = renderComponent({ onClick: onClickSpy });
    renderedComponent.find("button").simulate("click");
    expect(onClickSpy).toHaveBeenCalled();
  });

  it("should have a className attribute", () => {
    const className = "test";
    const renderedComponent = renderComponent({ className });
    expect(renderedComponent.find("button").hasClass(className)).toEqual(true);
  });

  it("should adopt a target attribute", () => {
    const target = "_blank";
    const renderedComponent = renderComponent({ target });
    expect(renderedComponent.prop("target")).toEqual(target);
  });

  it("should adopt a type attribute", () => {
    const type = "text/html";
    const renderedComponent = renderComponent({ type });
    expect(renderedComponent.prop("type")).toEqual(type);
  });
});
