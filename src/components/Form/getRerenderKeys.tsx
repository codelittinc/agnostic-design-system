export default (values, fieldsValidationState, names, children) => {
  const v = {};
  names.forEach(c => {
    v[c] = values[c] || '';
  });

  const n = {};
  names.forEach(c => {
    n[c] = fieldsValidationState[c];
  });

  const chidrenProps = children.map(c => c.props);

  return [...names, ...Object.values(v), ...Object.values(n), ...chidrenProps];
};
