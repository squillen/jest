import { createStore } from 'redux';
import rootReducer from '../store/reducers/index'

/**
 * Create a testing store with imported reducers, middleware, and inital state.
 * globals: rootReducer
 * @param {object} initialState - initial state from store
 * @function storeFactory
 * @returns {Store} - Redux store
 */
export const storeFactory = (initialState) => {
  createStore(rootReducer, initialState)
}

export const findByTestAttr = (wrapper, val) =>
  wrapper.find(`[data-test='${val}']`);
