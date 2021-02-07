import { act } from "react-dom/test-utils";
import { actionTypes } from "../actions/index";
/**
 * @function successReducer
 * @param {array} state - Array of guessed words
 * @param {object} action - action to be reduced
 * @returns {boolean} - new success state
 */

export default function successReducer(state = false, action) {
  switch (action.type) {
    case actionTypes.CORRECT_GUESS:
      return true;
    default:
      return state;
  }
}
