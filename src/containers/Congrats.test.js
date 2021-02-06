import Enzyme, { shallow } from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import { findByTestAttr } from "../../test/testUtils.js";
import Congrats from "./Congrats.js";

Enzyme.configure({ adapter: new Adapter() });

/**
 * Factory function to create a ShallowWrapper for the App component.
 * @function setup
 * @returns {ShallowWrapper}
 */
const setup = (props = {}) => shallow(<Congrats {...props} />);

test("renders without error", () => {
  const wrapper = setup();
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
  const congratsComponent = findByTestAttr(wrapper, 'congrats-component')
  expect(congratsComponent.text().length).not.toBe(0)
});

test("initializes with a word", () => {});
