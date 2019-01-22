import React from "react";
import { shallow, mount } from "enzyme";

import { Form, mapDispatchToProps } from "../index";

describe("<Form />", () => {
  it("should render the form", () => {
    const renderedComponent = mount(<Form />);
    expect(renderedComponent.find("form")).toHaveLength(1);
  });
  it("should render the inputs", () => {
    const renderedComponent = mount(<Form />);
    expect(renderedComponent.find("input")).toHaveLength(3);
  });
  it("should render the button", () => {
    const renderedComponent = mount(<Form />);
    expect(renderedComponent.find("button")).toHaveLength(1);
  });
  it("should submit form", () => {
    const submitSpy = jest.fn();
    const wrapper = mount(
      <Form
        link="Not Empty"
        width="Not Empty"
        height="Not Empty"
        onChangeLink={() => {}}
        onChangeWidth={() => {}}
        onChangeHeight={() => {}}
        onSubmitForm={submitSpy}
      />
    );
    wrapper.find("form").simulate("submit");
    expect(submitSpy).toHaveBeenCalled();
  });
});
