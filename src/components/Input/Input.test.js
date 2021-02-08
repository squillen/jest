import React from "react";
import { shallow } from "enzyme";

import { findByTestAttr, storeFactory } from "../../tests/testUtils";

import Input from "./Input";
import SVGButton from "../SVGButton.js";

const setupInput = (initialState = {}) => {
  const store = storeFactory(initialState);
  return shallow(<Input store={store} />);
};
const setupButton = (initialState = {}) => {
  return shallow(<SVGButton />);
};

describe("render", () => {
  describe("word has not been guessed", () => {
    let wrapper;
    beforeEach(() => {
      const initialState = { }
      wrapper = setupInput(initialState)

    })
    test("renders component without error", () => {});
    test("renders input box", () => {});
    test("renders submit button", () => {});
  });
  describe("word has been guessed", () => {
    test("renders component without error", () => {});
    test("renders input box", () => {});
    test("renders submit button", () => {});
  });
});
