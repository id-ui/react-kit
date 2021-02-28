export const stopPropagation = (e) => {
  e.stopPropagation();
  e.nativeEvent.stopImmediatePropagation();
};

export const preventDefault = (e) => {
  e.preventDefault();
};
