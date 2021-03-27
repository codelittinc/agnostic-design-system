export default (values, fieldsValidationState, names) => {
  const v = {};
  names.forEach(c => {
    v[c] = values[c] || '';
  });

  const n = {};
  names.forEach(c => {
    n[c] = fieldsValidationState[c];
  });

  return [...names, ...Object.values(v), ...Object.values(n)];
};
