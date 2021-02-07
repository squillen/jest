import { shallow } from "enzyme";
import { findByTestAttr } from "./testUtils.js";
import Modal from "../components/Modal";

const defaultProps = {
  showModal: false,
};
/**
 * Factory function to create a ShallowWrapper for the App component.
 * @function setup
 * @param {object} props - Component props specific to this setup
 * @returns {ShallowWrapper}
 */
const setup = (props = {}) => {
  const setupProps = { ...props, ...defaultProps };
  return shallow(<Modal {...setupProps} />);
};

test("renders without error", () => {
  const wrapper = setup({ showModal: false });
  const modal = findByTestAttr(wrapper, "modal");
  expect(modal.length).toBe(1);
});

test("renders no text when 'success' props is false", () => {
  const wrapper = setup({ showModal: false });
  const modal = findByTestAttr(wrapper, "modal");
  expect(modal.text()).toBe("");
});

test("renders text when 'success' props is true", () => {
  // const wrapper = setup({ showModal: true, children: <div>success!</div> });
  // const modal = findByTestAttr(wrapper, "modal");
  // expect(modal.text().length).not.toBe(0);
});

test("initializes with a word", () => {});
