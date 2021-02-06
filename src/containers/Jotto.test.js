import Enzyme, { shallow } from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import { findByTestAttr } from '../../test/testUtils.js'
import Jotto from "./Jotto";

Enzyme.configure({ adapter: new Adapter() });

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