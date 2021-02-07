import { shallow } from "enzyme";
import { findByTestAttr } from "../../test/testUtils.js";
import Jotto from "./Jotto";

const defaultProps = {
  guessedWords: [{ guessedWord: "hufflepuff", letterMatchCount: 3 }],
};
/**
 * Factory function to create a ShallowWrapper for the App component.
 * @function setup
 * @param {object} props - Component props specific to this setup
 * @returns {ShallowWrapper}
 */
const setup = (props = {}) => {
  const setupProps = { ...props, ...defaultProps };
  return shallow(<Jotto {...setupProps} />);
};

test("renders Jotto component without error", () => {
  const wrapper = setup();
  const jottoComponent = findByTestAttr(wrapper, "jotto-component");
  expect(jottoComponent.length).toBe(1);
});

test("it has a description", () => {
  const wrapper = setup();
  const jottoComponent = findByTestAttr(wrapper, "jotto-component");
  expect(jottoComponent.length).toBe(1);
})

describe("if there are no words guessed", () => {
  test("renders without error", () => {
    const wrapper = setup();
    const jottoComponent = findByTestAttr(wrapper, "header-description");
    expect(jottoComponent.length).toBe(1);
  });
});
