export default (value) => {
  try {
    return JSON.parse(value);
  } catch {
    return value;
  }
};
