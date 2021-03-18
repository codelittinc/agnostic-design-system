const validate = (type, test, value) =>
  type === 'RegExp' ? new RegExp(test).test(value) : test(value);

export const matchesFilter = (value, filters) => {
  if (!filters) {
    return false;
  }
  return filters.every(filter => {
    const { type, test } = filter;
    return validate(type, test, value);
  });
};
