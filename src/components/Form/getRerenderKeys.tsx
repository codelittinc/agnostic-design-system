import getValuesKeys from './getValuesKeys';

export default (children, values, fieldsValidationState) => {
  const names = getValuesKeys(children);
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
