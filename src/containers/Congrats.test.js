import { shallow } from "enzyme";
import { findByTestAttr } from "../../test/testUtils.js";
import Congrats from "./Congrats.js";

const defaultProps = {
  secretWord: "testing",
};
/**
 * Factory function to create a ShallowWrapper for the App component.
 * @function setup
 * @returns {ShallowWrapper}
 */
const setup = (props = {}) => {
  const setupProps = { ...props, ...defaultProps };
  return shallow(<Congrats {...setupProps} />);
};

test("renders without error", () => {
  const wrapper = setup({ success: false });
  const congratsComponent = findByTestAttr(wrapper, "congrats-component");
  expect(congratsComponent.length).toBe(1);
});

test("renders no text when 'success' props is false", () => {
  const wrapper = setup({ success: false });
  const congratsComponent = findByTestAttr(wrapper, "congrats-component");
  expect(congratsComponent.text()).toBe("");
});

test("renders text when 'success' props is true", () => {
  const wrapper = setup({ success: true });
  const congratsComponent = findByTestAttr(wrapper, "congrats-component");
  expect(congratsComponent.text().length).not.toBe(0);
});

test("initializes with a word", () => {});
