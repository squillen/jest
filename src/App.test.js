import { shallow } from "enzyme";
import { findByTestAttr } from "../test/testUtils.js";

import App from "./App";

/**
 * Factory function to create a ShallowWrapper for the App component.
 * @function setup
 * @returns {ShallowWrapper}
 */
const setup = () => shallow(<App />);

test("renders App without error", () => {
  const wrapper = setup();
  const appComponent = findByTestAttr(wrapper, "component__app");
  expect(appComponent.length).toBe(1);
});
