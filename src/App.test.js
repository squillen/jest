import Enzyme, { shallow, ShallowWrapper } from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";

import App from "./App";

Enzyme.configure({ adapter: new Adapter() });

/**
 * Factory function to create a ShallowWrapper for the App component.
 * @function setup
 * @returns {ShallowWrapper}
 */
const setup = () => shallow(<App />);

const findByTestAttr = (wrapper, val) => wrapper.find(`[data-test='${val}']`);

test("renders App without error", () => {
  const wrapper = setup();
  const appComponent = findByTestAttr(wrapper, "component__app");
  expect(appComponent.length).toBe(1);
});

test("renders counter display", () => {
  const wrapper = setup();
  const counterText = findByTestAttr(wrapper, "counter__text");
  expect(counterText.length).toBe(1);
});

test("renders inc button", () => {
  const wrapper = setup();
  const counterBtn = findByTestAttr(wrapper, "counter__inc_btn");
  expect(counterBtn.length).toBe(1);
});

test("renders dec button", () => {
  const wrapper = setup();
  const counterBtn = findByTestAttr(wrapper, "counter__dec_btn");
  expect(counterBtn.length).toBe(1);
});

test("counter starts at 0", () => {
  const wrapper = setup();
  const count = findByTestAttr(wrapper, "counter__count").text();
  expect(count).toBe("0");
});

test("clicking on button increments counter", () => {
  const wrapper = setup();
  const counterBtn = findByTestAttr(wrapper, "counter__inc_btn");
  counterBtn.simulate("click");
  const count = findByTestAttr(wrapper, "counter__count").text();
  expect(count).toBe("1");
});

test("clicking decrement won't go below 0", () => {
  const wrapper = setup();
  const decrementBtn = findByTestAttr(wrapper, "counter__dec_btn");
  decrementBtn.simulate("click");
  const count = findByTestAttr(wrapper, "counter__count").text();
  expect(count).toBe("0");
});

test("decrement button decreases value", () => {
  const wrapper = setup();
  const incButton = findByTestAttr(wrapper, "counter__inc_btn");
  incButton.simulate("click");
  const incrementedValue = findByTestAttr(wrapper, "counter__count").text();
  expect(incrementedValue).toBe("1");
  const decButton = findByTestAttr(wrapper, "counter__dec_btn");
  decButton.simulate("click");
  const decrementedValue = findByTestAttr(wrapper, "counter__count").text();
  expect(decrementedValue).toBe("0");
});
