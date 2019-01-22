import React from "react";
import { mount } from "enzyme";

import Header from "../index";

describe("<Header />", () => {
  it("should render an <header> tag", () => {
    const header = mount(<Header />);
    expect(header.find("header")).toHaveLength(1);
  });

  it("should have children", () => {
    const header = mount(<Header />);
    expect(header.find("h2")).toHaveLength(1);
  });
  it("should have a className attribute", () => {
    const className = "test";
    const header = mount(<Header className={className} />);
    expect(header.prop("className")).toEqual(className);
  });

  it("should adopt a valid attribute", () => {
    const id = "test";
    const header = mount(<Header id={id} />);
    expect(header.prop("id")).toEqual(id);
  });
});
