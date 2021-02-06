import { shallow } from "enzyme";
import { findByTestAttr } from '../../test/testUtils.js'
import Jotto from "./Jotto";

/**
 * Factory function to create a ShallowWrapper for the App component.
 * @function setup
 * @returns {ShallowWrapper}
 */
const setup = (props = {}) => shallow(<Jotto {...props} />);

test("renders Jotto component without error", () => {
  const wrapper = setup();
  const jottoComponent = findByTestAttr(wrapper, "jotto__component");
  expect(jottoComponent.length).toBe(1);
});