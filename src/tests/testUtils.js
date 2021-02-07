export const findByTestAttr = (wrapper, val) =>
  wrapper.find(`[data-test='${val}']`);
