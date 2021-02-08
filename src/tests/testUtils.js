import { applyMiddleware, createStore } from "redux";
import rootReducer from "../store/reducers/index";
import { middlewares } from "../store/configureStore.js";

/**
 * Create a testing store with imported reducers, middleware, and inital state.
 * globals: rootReducer
 * @param {object} initialState - initial state from store
 * @function storeFactory
 * @returns {Store} - Redux store
 */
export const storeFactory = (initialState) => {
  const createStoreWithMiddleware = applyMiddleware(...middlewares)(
    createStore
  );
  createStoreWithMiddleware(rootReducer, initialState);
};

export const findByTestAttr = (wrapper, val) =>
  wrapper.find(`[data-test='${val}']`);
